import { ReactNode } from "react";

const Message = ({ children, you }: { children: ReactNode; you?: boolean }) => {
  return (
    <div
      className={`w-full flex`}
      style={{ justifyContent: you ? "flex-start" : "flex-end" }}
    >
      <p
        className={`bg-[#343534] rounded-xl m-2 p-4 text-white inline-block w-[90%] max-w-[700px]`}
        style={{
          borderRadius: you ? "16px 16px 16px 0px" : "16px 16px 0px 16px",
        }}
      >
        {children}
      </p>
    </div>
  );
};

export default Message;
