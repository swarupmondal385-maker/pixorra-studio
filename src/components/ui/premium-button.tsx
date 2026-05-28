import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "gold" | "navy" | "ghost" | "glass";

interface PremiumButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: "md" | "lg";
}

/**
 * Premium animated CTA: shimmer sweep, lift on hover, gold/navy variants.
 * Render as <a> for navigation or CTA links.
 */
export const PremiumButton = React.forwardRef<HTMLAnchorElement, PremiumButtonProps>(
  ({ className, variant = "gold", size = "lg", children, ...props }, ref) => {
    const sizeCls = size === "lg" ? "h-14 px-7 text-[15px]" : "h-11 px-5 text-sm";
    const variantCls: Record<Variant, string> = {
      gold:
        "bg-gradient-gold text-ink border-2 border-ink shadow-gold hover:shadow-[0_28px_70px_-18px_color-mix(in_oklab,var(--gold)_75%,transparent)]",
      navy:
        "bg-gradient-pixorra text-white border-2 border-ink shadow-pixel",
      ghost:
        "bg-white text-ink border-2 border-ink shadow-pixel hover:bg-cream",
      glass:
        "glass-strong text-ink border border-ink/15 shadow-card",
    };
    return (
      <a
        ref={ref}
        {...props}
        className={cn(
          "group relative inline-flex items-center justify-center gap-2 rounded-full font-bold tracking-tight overflow-hidden transition-all duration-300 will-change-transform hover:-translate-y-0.5 active:translate-y-0",
          sizeCls,
          variantCls[variant],
          className,
        )}
      >
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
        {/* shimmer sweep */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1100ms] ease-out"
          style={{
            background:
              "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.55) 50%, transparent 70%)",
          }}
        />
      </a>
    );
  },
);
PremiumButton.displayName = "PremiumButton";
