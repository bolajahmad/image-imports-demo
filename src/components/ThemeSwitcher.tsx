"use client";
import { useThemeProvider } from "@/lib/theme-provider";
import Image from "next/image";

export const ThemeSwitcherElement = () => {
  const { updateTheme, theme } = useThemeProvider();
  console.log({ theme });

  return (
    <div className="w-10 h-10 top-1/2 right-6 fixed">
      <div className="absolute w-fit">
        <button
          className="rounded-lg h-10 w-10 bg-blue-deep dark:bg-white flex items-center justify-center"
          onClick={() => updateTheme?.()}
        >
          <Image
            src={
              theme === "light"
                ? "/svgs/lightbulb-dark.svg"
                : "/svgs/lightbulb.svg"
            }
            alt="Lightbulb"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
};
