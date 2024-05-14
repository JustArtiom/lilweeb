import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { type PropsWithChildren } from "react";

const messageVariants = cva(
  "flex rounded-lg rounded-xl p-4 text-white max-w-[min(80%,32rem)]",
  {
    variants: {
      variant: {
        default: "mr-auto bg-[#191919]",
        user: "ml-auto bg-[#343434]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface MessageProps
  extends PropsWithChildren,
    VariantProps<typeof messageVariants> {}

const Message = ({ children, variant }: MessageProps) => {
  return (
    <div className={cn(messageVariants({ variant }))}>
      <p className="inline-block ">{children}</p>
    </div>
  );
};

export default Message;
