import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "emergency";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const variantStyles: Record<string, string> = {
  primary: "bg-amber text-white hover:bg-amber-hover",
  secondary: "border-2 border-navy text-navy hover:bg-navy hover:text-white",
  emergency: "bg-emergency text-white hover:opacity-90",
};

const sizeStyles: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  onClick,
  children,
  fullWidth = false,
  className,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center",
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full",
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
