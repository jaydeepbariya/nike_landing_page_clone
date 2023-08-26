import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/constants";

const Navbar = () => {
  return (
    <header className="w-11/12 mx-auto flex justify-center items-center">
      <nav className="w-full flex items-center justify-between gap-x-16">
        <a href="/" className="gap-x-16">
          <img src={headerLogo} alt="Logo" width={130} height={30} />
        </a>

        <ul className="flex justify-center items-center gap-x-16 max-lg:hidden">
          {navLinks.map((navLink, index) => (
            <li>
              <a href={navLink.href}>{navLink.label}</a>
            </li>
          ))}
        </ul>

        <div className="block max-lg:hidden">
          {" "}
          <a href="/" className="font-semibold">
            Sign In / Register
          </a>
        </div>

        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={50} height={50} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
