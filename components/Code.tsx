import type { ComponentProps, ReactElement } from "react";

export const Code = ({ children }: ComponentProps<"code">): ReactElement => {
  return <code className="bg-gray-200/30 p-0.5 text-[.95em] dark:bg-gray-400/20">{children}</code>;
};
