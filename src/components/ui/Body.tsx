import React, { HTMLAttributes, PropsWithChildren } from "react";
import { cva, VariantProps } from "class-variance-authority";

const bodyStyles = cva("font-light", {
  variants: {
    size: {
      md: "text-[15px]",
      sm: "text-[13px]",
    },
  },
});

type BodyStyleProps = VariantProps<typeof bodyStyles>;

interface BodyProps {
  className?: HTMLAttributes<HTMLHeadingElement>["className"];
}

type Size = NonNullable<BodyStyleProps["size"]>;

export interface Props extends BodyProps {
  size: Size;
}

export const Body: React.FC<PropsWithChildren<Props>> = ({
  size,
  children,
  className,
  ...props
}) => {
  const Component = "p";

  return (
    <Component className={bodyStyles({ size, className })} {...props}>
      {children}
    </Component>
  );
};
