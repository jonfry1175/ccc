import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ThemedButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'navy';
  size?: 'default' | 'sm' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
}

export default function ThemedButton({ 
  children, 
  variant = 'primary',
  size = 'default',
  className,
  onClick
}: ThemedButtonProps) {
  
  const variantStyles = {
    primary: "bg-gold hover:bg-gold-light text-navy-DEFAULT border border-gold hover:shadow-lg",
    secondary: "bg-transparent border border-gold text-gold hover:bg-gold/10 hover:text-white hover:border-white hover:shadow-lg",
    outline: "bg-transparent border border-white text-white hover:bg-white/10 hover:border-gold hover:text-gold hover:shadow-lg",
    navy: "bg-navy-light hover:bg-navy-DEFAULT border border-navy-light hover:border-gold text-gold hover:text-white hover:shadow-lg"
  };
  
  const sizeStyles = {
    default: "px-4 py-2 text-sm",
    sm: "px-3 py-1.5 text-xs",
    lg: "px-6 py-3 text-base font-medium",
    xl: "px-8 py-4 text-lg font-medium"
  };
  
  return (
    <Button
      onClick={onClick}
      className={cn(
        variantStyles[variant],
        sizeStyles[size],
        "transition-all duration-300 rounded-md min-w-[180px]",
        className
      )}
    >
      {children}
    </Button>
  );
} 