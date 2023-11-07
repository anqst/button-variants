import { tv, type VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

const button = tv({
  base: "px-4 py-1.5 rounded-none",
  variants: {
    color: {
      primary:
        "bg-gray-500 text-white hover:text-white hover:bg-gray-600 hover:border-none",
      secondary:
        "bg-white text-black border-solid border-black border-2 hover:text-white hover:bg-gray-600 hover:border-none",
    },
    rounding: {
      tiny: "rounded-md",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    color: "primary",
  },
  compoundVariants: [],
});

/* const predefinedButton = tv({
  base: button(),
  variants: {
    type: {
        btn1: button()
    }
  },
}); */

type ButtonVariants = VariantProps<typeof button>;

interface ButtonProps {
  children?: React.ReactNode;
  variants?: ButtonVariants;
  className?: string;
}

export default function Button(props: ButtonProps) {
  const clName = twMerge(button(props.variants), props.className);
  return <button className={clName}>{props.children}</button>;
}
