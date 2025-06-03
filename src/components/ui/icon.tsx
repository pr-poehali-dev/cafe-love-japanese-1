import { LucideIcon, LucideProps } from "lucide-react";
import { forwardRef } from "react";
import * as Icons from "lucide-react";

interface IconProps extends Omit<LucideProps, "ref"> {
  name: string;
  fallback?: string;
}

const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ name, fallback = "CircleAlert", ...props }, ref) => {
    const IconComponent =
      (Icons as Record<string, LucideIcon>)[name] ||
      (Icons as Record<string, LucideIcon>)[fallback];

    if (!IconComponent) {
      console.warn(`Icon "${name}" not found, using fallback "${fallback}"`);
      return <Icons.CircleAlert ref={ref} {...props} />;
    }

    return <IconComponent ref={ref} {...props} />;
  },
);

Icon.displayName = "Icon";

export default Icon;
