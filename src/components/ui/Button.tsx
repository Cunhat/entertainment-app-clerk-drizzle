import React from "react"
import { VariantProps, cva } from "class-variance-authority"

const ButtonStyles = cva("rounded-md text-[15px] font-light  h-12", {
  variants: {
    variant: {
      primary:
        "bg-custom-red text-white hover:bg-white hover:text-custom-bue-700",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
})

interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonStyles> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        className={ButtonStyles({ variant, className })}
        ref={ref}
        {...props}
      />
    )
  }
)

export { Button, ButtonStyles }
