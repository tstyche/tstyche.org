import { Idea as TipIcon, Information as NoteIcon, Warning as WarningIcon } from "@carbon/icons-react";
import type { ReactElement, ComponentProps } from "react";

export function Note({ children }: ComponentProps<"div">): ReactElement {
  return (
    <div className="mt-6 flex overflow-x-auto rounded-md border border-gray-400 py-2 pr-4 dark:border-gray-500">
      <div className="select-none pl-3 pr-2 text-gray-400 dark:text-gray-500">
        <NoteIcon className="inline" size={20} />
      </div>
      <div>{children}</div>
    </div>
  );
}

export function Tip({ children }: ComponentProps<"div">): ReactElement {
  return (
    <div className="mt-6 flex overflow-x-auto rounded-md border border-blue-ribbon-700 py-2 pr-4 dark:border-blue-ribbon-500">
      <div className="select-none pl-3 pr-2 text-blue-ribbon-700 dark:text-blue-ribbon-500">
        <TipIcon className="inline" size={20} />
      </div>
      <div>{children}</div>
    </div>
  );
}

export function Warning({ children }: ComponentProps<"div">): ReactElement {
  return (
    <div className="mt-6 flex overflow-x-auto rounded-md border border-blaze-orange-700 py-2 pr-4 dark:border-blaze-orange-500">
      <div className="select-none pl-3 pr-2 text-blaze-orange-700 dark:text-blaze-orange-500">
        <WarningIcon className="inline" size={20} />
      </div>
      <div>{children}</div>
    </div>
  );
}
