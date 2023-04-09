import React, { HTMLAttributes, PropsWithChildren } from "react";
import { cva, VariantProps } from "class-variance-authority";

const headingStyles = cva("", {
  variants: {
    size: {
      lg: "text-[32px] font-light",
      md: "text-2xl font-light",
      sm: "text-2xl font-medium",
      xs: "text-lg font-medium",
    },
  },
});

type HeadingStyleProps = VariantProps<typeof headingStyles>;

interface HeadingProps {
  className?: HTMLAttributes<HTMLHeadingElement>["className"];
}

type Size = NonNullable<HeadingStyleProps["size"]>;

export interface Props extends HeadingProps {
  size: Size;
}

const tags = {
  lg: "h1",
  md: "h2",
  sm: "h3",
  xs: "h4",
};

type TComponent = "h1" | "h2" | "h3" | "h4";

export const Heading: React.FC<PropsWithChildren<Props>> = ({
  size,
  children,
  className,
  ...props
}) => {
  const Component = tags[size] as TComponent;

  return (
    <Component className={headingStyles({ size, className })} {...props}>
      {children}
    </Component>
  );
};
