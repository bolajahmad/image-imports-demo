"use client";
import { useThemeProvider } from "@/lib/theme-provider";
import Image from "next/image";
import LightBulbDark from "@/assets/svgs/lightbulb-dark.svg";
import LightBulbLight from "@/assets/svgs/lightbulb.svg";

export const ThemeSwitcherElement = () => {
  const { updateTheme, theme } = useThemeProvider();

  return (
    <div className="w-10 h-10 top-1/2 right-6 fixed">
      <div className="absolute w-fit">
        <button
          className="rounded-lg h-10 w-10 bg-blue-deep dark:bg-white flex items-center justify-center"
          onClick={() => updateTheme?.()}
        >
          <Image
            src={theme === "light" ? LightBulbDark : LightBulbLight}
            alt="Lightbulb"
          />
        </button>
      </div>
    </div>
  );
};
