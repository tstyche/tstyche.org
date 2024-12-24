import { ArrowRight } from "@carbon/icons-react";
import Link from "next/link";
import { Code } from "./Code";

export function Essentials() {
  return (
    <>
      <div className="rounded-md text-center border text-blue-ribbon-700 border-blue-ribbon-700 py-2 dark:text-blue-ribbon-500 dark:border-blue-ribbon-500">        <Link href="/releases/tstyche-3">
          TSTyche 3.2 is now available
          <ArrowRight className="inline pl-1 align-bottom" size={22} />
        </Link>
      </div>

      <div className="pb-12 pt-8 sm:pb-16 sm:pt-12 lg:pb-32 lg:pt-24 xl:pb-48">
        <h1 className="max-w-md text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl lg:max-w-2xl lg:text-6xl">
          The Essential Type&nbsp;Testing&nbsp;Tool.
        </h1>

        <p className="mt-6 max-w-lg text-gray-500 dark:text-gray-400 sm:mt-10 sm:text-lg md:max-w-3xl lg:text-xl">
          TSTyche is a type testing tool for TypeScript. It&nbsp;ships with <Code>{"describe()"}</Code> and{" "}
          <Code>{"test()"}</Code> helpers, <Code>{"expect"}</Code> style assertions and&nbsp;a&nbsp;mighty test runner.
        </p>

        <p className="mt-10 sm:text-lg lg:text-xl">
          <Link
            className="mr-4 rounded-none border-b border-blue-ribbon-700 py-2 text-blue-ribbon-700 dark:border-blue-ribbon-500 dark:text-blue-ribbon-500 sm:mr-6"
            href="/guide/get-started"
          >
            Quick Start
            <ArrowRight className="inline pl-1 align-bottom" size={24} />
          </Link>
          <Link
            className="hidden md:inline mr-4 rounded-none border-b border-gray-500 py-2 text-gray-500 dark:border-gray-400 dark:text-gray-400 sm:mr-6"
            href="/guide/introduction"
          >
            Slow Start
            <ArrowRight className="inline pl-1 align-bottom" size={24} />
          </Link>          <Link
            className="rounded-none border-b border-gray-500 py-2 text-gray-500 dark:border-gray-400 dark:text-gray-400"
            href="/reference/expect-api"
          >
            Reference
            <ArrowRight className="inline pl-1 align-bottom" size={24} />
          </Link>
        </p>
      </div>
    </>
  );
}
