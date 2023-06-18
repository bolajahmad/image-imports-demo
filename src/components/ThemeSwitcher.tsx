"use client";
import { useThemeProvider } from "@/lib/theme-provider";
import SVGLightBulb from "@/app/(assets)/LightBulb";

export const ThemeSwitcherElement = () => {
  const { updateTheme } = useThemeProvider();

  return (
    <div className="w-10 h-10 top-1/2 right-6 fixed">
      <div className="absolute w-fit">
        <button
          className="rounded-lg h-10 w-10 bg-blue-deep dark:bg-white flex items-center justify-center"
          onClick={() => updateTheme?.()}
        >
          <SVGLightBulb />
        </button>
      </div>
    </div>
  );
};
