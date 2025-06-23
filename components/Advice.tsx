import { Information as NoteIcon, Idea as TipIcon, Warning as WarningIcon } from "@carbon/icons-react";
import type { ComponentProps, ReactElement } from "react";

export function Note({ children }: ComponentProps<"div">): ReactElement {
  return (
    <div className="mt-6 flex overflow-x-auto rounded-md border border-gray-400 py-2 pr-4">
      <div className="select-none pl-3 pr-2 text-gray-400">
        <NoteIcon className="inline" size={20} />
      </div>
      <div>{children}</div>
    </div>
  );
}

export function Tip({ children }: ComponentProps<"div">): ReactElement {
  return (
    <div className="mt-6 flex overflow-x-auto rounded-md border border-blue-600 py-2 pr-4 dark:border-blue-500">
      <div className="select-none pl-3 pr-2 text-blue-600 dark:text-blue-500">
        <TipIcon className="inline" size={20} />
      </div>
      <div>{children}</div>
    </div>
  );
}

export function Warning({ children }: ComponentProps<"div">): ReactElement {
  return (
    <div className="mt-6 flex overflow-x-auto rounded-md border border-amber-600 py-2 pr-4 dark:border-amber-500">
      <div className="select-none pl-3 pr-2 text-amber-600 dark:text-amber-500">
        <WarningIcon className="inline" size={20} />
      </div>
      <div>{children}</div>
    </div>
  );
}
