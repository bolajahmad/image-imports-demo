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
              <span>Mean</span>
            </li>
            <li key="projects-href">
              <span>Median</span>
            </li>
            <li className="blogs-href">
              <span>Mode</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
