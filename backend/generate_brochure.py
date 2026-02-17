from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY

def create_sponsorship_brochure():
    filename = "assets/brochure.pdf"
    # Adjust margins to ensure everything fits on one page
    doc = SimpleDocTemplate(filename, pagesize=letter, rightMargin=50, leftMargin=50, topMargin=50, bottomMargin=50)
    
    Story = []
    styles = getSampleStyleSheet()
    
    # Custom Styles
    title_style = ParagraphStyle(
        'MainTitle',
        parent=styles['Heading1'],
        fontSize=26,
        textColor=colors.HexColor("#0f172a"),
        alignment=TA_CENTER,
        spaceAfter=10,
        fontName='Helvetica-Bold'
    )
    
    subtitle_style = ParagraphStyle(
        'SubTitle',
        parent=styles['Heading2'],
        fontSize=16,
        textColor=colors.HexColor("#3b82f6"),
        alignment=TA_CENTER,
        spaceAfter=25,
        fontName='Helvetica'
    )
    
    section_header = ParagraphStyle(
        'SectionHeader',
        parent=styles['Heading3'],
        fontSize=14,
        textColor=colors.HexColor("#1e293b"),
        spaceBefore=15,
        spaceAfter=8,
        fontName='Helvetica-Bold',
        borderPadding=5,
        borderColor=colors.HexColor("#e2e8f0"),
        borderWidth=1,
        borderRadius=5,
        backColor=colors.HexColor("#f8fafc")
    )
    
    body_text = ParagraphStyle(
        'BodyText',
        parent=styles['Normal'],
        fontSize=11,
        leading=14,
        alignment=TA_JUSTIFY,
        spaceAfter=10
    )

    # --- Header ---
    Story.append(Paragraph("PAIS AI Hub", title_style))
    Story.append(Paragraph("Collaboration & Sponsorship Prospectus", subtitle_style))
   
    # --- About Section ---
    Story.append(Paragraph("Who We Are", section_header))
    about_text = """
    The <b>PIEAS Artificial Intelligence Society (PAIS)</b> is the premier student-led tech organization at PIEAS University. 
    We are dedicated to bridging the gap between theoretical AI concepts and real-world application through hands-on learning, 
    industry collaboration, and innovation.
    """
    Story.append(Paragraph(about_text, body_text))
    
    # --- Collaboration Opportunities ---
    Story.append(Paragraph("Collaboration Opportunities", section_header))
    collab_text = """
    We are seeking partners for our upcoming academic year. Your support will directly power:
    <br/>• <b>Bootcamps & Workshops:</b> Practical training sessions on ML, Data Science, and GenAI.
    <br/>• <b>Hackathons:</b> Competitive coding events solving real-world problems.
    <br/>• <b>Seminars & Tech Talks:</b> Industry experts sharing insights with students.
    """
    Story.append(Paragraph(collab_text, body_text))
    
    # --- Sponsorship Packages ---
    Story.append(Paragraph("Partnership Tiers", section_header))
    
    # Table Data - Adjusted for <10k pricing and event focus
    data = [
        ['Features', 'Event Partner', 'Workshop Sponsor', 'Supporter'],
        ['Contribution', 'PKR 10,000', 'PKR 5,000', 'PKR 2,500'],
        ['Brand Visibility', 'Premium Logo\n(Website + Banners)', 'Logo on\nEvent Slides', 'Name in\nNewsletter'],
        ['Speaking Slot', 'Keynote / Tech Talk', 'Intro Session', 'No'],
        ['Social Media', 'Dedicated Post', 'Group Mention', 'Story Mention'],
        ['Booth/Stall', 'Yes', 'No', 'No']
    ]
    
    # Table Styling
    col_widths = [140, 110, 110, 110]
    t = Table(data, colWidths=col_widths)
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor("#1e293b")),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 10),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 10),
        ('TOPPADDING', (0, 0), (-1, 0), 10),
        ('BACKGROUND', (0, 1), (-1, -1), colors.HexColor("#f1f5f9")),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor("#cbd5e1")),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.whitesmoke, colors.HexColor("#f8fafc")]),
        ('FONTSIZE', (0, 1), (-1, -1), 9),
    ]))
    Story.append(t)
    
    # --- Contact Section ---
    Story.append(Spacer(1, 40))
    Story.append(Paragraph("Get In Touch", section_header))
    
    contact_style = ParagraphStyle(
        'ContactText',
        parent=styles['Normal'],
        fontSize=11,
        leading=14,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#334155")
    )
    
    contact_content = """
    Ready to shape the future of AI with us? <br/><br/>
    <b>Email:</b> pieas.ai.society@gmail.com &nbsp;&nbsp;|&nbsp;&nbsp; 
    <b>Phone:</b> +92 343 3055357 <br/>
    <b>Location:</b> PIEAS University, Nilore, Islamabad
    """
    Story.append(Paragraph(contact_content, contact_style))
    
    # Build Document
    doc.build(Story)
    print(f"Brochure generated at {filename}")

if __name__ == "__main__":
    create_sponsorship_brochure()
