import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden touch-manipulation will-change-transform transition-transform active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  ripple?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ripple = true, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    const handleRipple = (e: React.PointerEvent<HTMLElement>) => {
      if (!ripple) return
      const target = e.currentTarget as HTMLElement
      const rect = target.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height) * 1.2
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const rippleEl = document.createElement("span")
      rippleEl.className = "btn-ripple"
      rippleEl.style.left = `${x}px`
      rippleEl.style.top = `${y}px`
      rippleEl.style.width = `${size}px`
      rippleEl.style.height = `${size}px`
      target.appendChild(rippleEl)
      rippleEl.addEventListener("animationend", () => {
        rippleEl.remove()
      })
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref as any}
        onPointerDown={(e: any) => {
          handleRipple(e)
          props.onPointerDown?.(e)
        }}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
