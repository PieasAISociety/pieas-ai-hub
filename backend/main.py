from fastapi import FastAPI, HTTPException, BackgroundTasks, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import List
from database import init_db, SessionLocal, ContactSubmission
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig, MessageType
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

app = FastAPI()

# CORS Configuration
origins = [
    "http://localhost:5173",  # Vite default
    "http://localhost:8080",  # Current running port
    "http://127.0.0.1:5173",
    "http://127.0.0.1:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Email Configuration
conf = ConnectionConfig(
    MAIL_USERNAME=os.getenv("MAIL_USERNAME", "pieas.ai.society@gmail.com"),
    MAIL_PASSWORD=os.getenv("MAIL_PASSWORD", "your_app_password"),
    MAIL_FROM=os.getenv("MAIL_FROM", "pieas.ai.society@gmail.com"),
    MAIL_PORT=int(os.getenv("MAIL_PORT", 587)),
    MAIL_SERVER=os.getenv("MAIL_SERVER", "smtp.gmail.com"),
    MAIL_STARTTLS=True,
    MAIL_SSL_TLS=False,
    USE_CREDENTIALS=True,
    VALIDATE_CERTS=True
)

# Pydantic Models
class ContactSchema(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

# Database Dependency
async def get_db():
    async with SessionLocal() as session:
        yield session

@app.on_event("startup")
async def on_startup():
    await init_db()

@app.post("/api/contact")
async def submit_contact(
    contact: ContactSchema, 
    background_tasks: BackgroundTasks,
    db: AsyncSession = Depends(get_db)
):
    try:
        # Save to Database
        new_submission = ContactSubmission(
            name=contact.name,
            email=contact.email,
            subject=contact.subject,
            message=contact.message
        )
        db.add(new_submission)
        await db.commit()
        await db.refresh(new_submission)

        # Send Emails (Background Task)
        background_tasks.add_task(send_contact_emails, contact)

        return {"message": "Contact form submitted successfully"}
    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")

async def send_contact_emails(contact: ContactSchema):
    try:
        fm = FastMail(conf)
        
        # 1. Email to the User (Verification/Acknowledgement)
        user_body = f"""
        <h3>Hello {contact.name},</h3>
        <p>Thank you for contacting PAIS AI Hub. We have received your message regarding "{contact.subject}".</p>
        <p>Our team will review your query and get back to you shortly.</p>
        <br>
        <p>Best Regards,</p>
        <p>PAIS AI Hub Team</p>
        """
        
        user_message = MessageSchema(
            subject="We received your message - PAIS AI Hub",
            recipients=[contact.email],
            body=user_body,
            subtype=MessageType.html
        )
        await fm.send_message(user_message)

        # 2. Email to Admin (Darain Hyder)
        admin_body = f"""
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> {contact.name}</p>
        <p><strong>Email:</strong> {contact.email}</p>
        <p><strong>Subject:</strong> {contact.subject}</p>
        <p><strong>Message:</strong></p>
        <p>{contact.message}</p>
        """
        
        # Admin email recipient
        admin_email = os.getenv("ADMIN_EMAIL", "darainhyder21@gmail.com") 
        
        admin_message = MessageSchema(
            subject=f"New Contact: {contact.subject}",
            recipients=[admin_email],
            body=admin_body,
            subtype=MessageType.html
        )
        await fm.send_message(admin_message)
        
    except Exception as e:
        print(f"Email Error: {e}")

# Sponsorship Schema
class SponsorshipSchema(BaseModel):
    name: str
    email: EmailStr
    organization: str
    role: str

from database import SponsorshipLead

@app.post("/api/sponsorship")
async def request_sponsorship(
    lead: SponsorshipSchema,
    background_tasks: BackgroundTasks,
    db: AsyncSession = Depends(get_db)
):
    try:
        # Save Lead to Database
        new_lead = SponsorshipLead(
            name=lead.name,
            email=lead.email,
            organization=lead.organization,
            role=lead.role
        )
        db.add(new_lead)
        await db.commit()
        await db.refresh(new_lead)

        # Send Emails (Background Task)
        background_tasks.add_task(send_sponsorship_emails, lead)

        return {"message": "Sponsorship request received"}
    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")

async def send_sponsorship_emails(lead: SponsorshipSchema):
    try:
        fm = FastMail(conf)
        
        # 1. Email to User (With Attachment)
        user_body = f"""
        <h3>Hello {lead.name},</h3>
        <p>Thank you for your interest in sponsoring PAIS AI Hub.</p>
        <p>Please find the sponsorship deck attached to this email.</p>
        <br>
        <p>Best Regards,</p>
        <p>PAIS AI Hub Team</p>
        """
        
        user_message = MessageSchema(
            subject="PAIS AI Hub Sponsorship Deck",
            recipients=[lead.email],
            body=user_body,
            subtype=MessageType.html,
            attachments=["./assets/brochure.pdf"]
        )
        await fm.send_message(user_message)

        # 2. Email to Admin
        admin_body = f"""
        <h3>New Sponsorship Lead</h3>
        <p><strong>Name:</strong> {lead.name}</p>
        <p><strong>Email:</strong> {lead.email}</p>
        <p><strong>Organization:</strong> {lead.organization}</p>
        <p><strong>Role:</strong> {lead.role}</p>
        """
        
        admin_email = os.getenv("ADMIN_EMAIL", "darainhyder21@gmail.com") 
        
        admin_message = MessageSchema(
            subject=f"New Lead: {lead.organization}",
            recipients=[admin_email],
            body=admin_body,
            subtype=MessageType.html
        )
        await fm.send_message(admin_message)

    except Exception as e:
        print(f"Sponsorship Email Error: {e}")
