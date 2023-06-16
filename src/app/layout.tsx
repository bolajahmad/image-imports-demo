import { ThemeProvider } from "@/lib/theme-provider";
import "./globals.css";
import { Rubik } from "next/font/google";
import { ThemeSwitcherElement } from "@/components/ThemeSwitcher";
import { NavbarElement } from "@/components/Navbar";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Image Imports",
  description: "Image Importing into components demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <body className={rubik.className}>
        <div className="h-screen w-screen flex overflow-x-hidden text-others-base flex-col border-1">
          <header>
            <NavbarElement />
          </header>
          <main className="flex-1 bg-bg-page">{children}</main>
        </div>
        <ThemeSwitcherElement />
      </body>
    </ThemeProvider>
  );
}
