import Link from "next/link";
import SVGLogo from "@/app/(assets)/LogoIcon";

export const NavbarElement = () => {
  return (
    <div className="w-full px-12 bg-others-navbar">
      <div className="flex w-full items-center justify-between divider-bottom py-4 navbar-bg">
        <div>
          <SVGLogo />
        </div>

        <nav>
          <ul className="flex items-center gap-4 justify-end">
            <li key="about-href">
              <Link href="/about">
                <span>About</span>
              </Link>
            </li>
            <li key="projects-href">
              <Link href="/projects">
                <span>Projects</span>
              </Link>
            </li>
            <li className="blogs-href">
              <Link href="/blogs">
                <span>Blog</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
