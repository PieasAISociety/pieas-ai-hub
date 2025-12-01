import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold uppercase tracking-wider ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_30px_hsl(190_95%_60%/0.5)] transition-all duration-300",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:scale-105",
        outline: "border-2 border-primary bg-transparent text-foreground hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_20px_hsl(190_95%_60%/0.3)]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:border-primary/50 border-2 border-transparent",
        ghost: "hover:bg-primary/10 hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline",
        neural: "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-105 hover:shadow-[0_0_40px_hsl(190_95%_60%/0.4),0_0_40px_hsl(15_95%_60%/0.4)] animate-gradient-shift bg-[length:200%_auto]",
        cyber: "bg-card border-2 border-primary text-foreground hover:bg-primary/20 hover:shadow-[inset_0_0_20px_hsl(190_95%_60%/0.2),0_0_30px_hsl(190_95%_60%/0.4)] backdrop-blur-sm",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-14 rounded-lg px-10 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
