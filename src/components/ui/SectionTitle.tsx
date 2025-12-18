import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const SectionTitle = React.forwardRef<HTMLHeadingElement, SectionTitleProps>(
  ({ className, as: Component = "h2", children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "text-5xl font-semibold text-black",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
SectionTitle.displayName = "SectionTitle";

export { SectionTitle };

