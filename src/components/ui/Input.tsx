import React from "react"

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        required
        className="w-[336px] caret-custom-red pb-5 pl-4 bg-transparent border-b-[1px] border-b-custom-bue-200 focus:border-b-white invalid:border-b-custom-red border-purple-600 focus:outline-none  focus:ring-0  text-white font-light text-[15px]"
      />
    )
  }
)

Input.displayName = "Input"
