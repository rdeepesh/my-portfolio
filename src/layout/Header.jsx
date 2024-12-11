import styled from "styled-components";
import { Link } from "react-scroll";
import { useState } from "react";
import { HAMBURGER_ICON } from "../Components/UI/Icons";

// Styled Components
const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 1000;
  @media screen and (max-width: 600px) {
    padding: 0 3%;
    height: 50px;
  }
`;

const Logo = styled.div`
  font-size: 2rem;
  color: var(--white);
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const NavLinks = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  gap: 20px;
  @media screen and (max-width: 600px) {
    position: fixed;
    z-index: 1000;
    top: 50px;
    right: ${({ menuOpen }) => (menuOpen ? "0" : "-100%")};
    width: 100%;
    padding: 25px 3%;
    flex-direction: column;
    opacity: ${({ menuOpen }) => (menuOpen ? "1" : "0")};
    visibility: ${({ menuOpen }) => (menuOpen ? "visible" : "hidden")};
    transition: 0.3s ease-in-out;
    gap: 15px;
    background-color: rgba(2, 0, 36, 0.925);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

const NavLink = styled.li`
  font-size: 1rem;
  color: var(--white);
  cursor: pointer;
  transition: color 0.3s ease;
  font-weight: 300;
  a {
    &:hover {
      color: var(--primary);
    }
  }
  a.active {
    color: var(--primary);
  }
  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
    color: var(--white);
  }
`;

const MenuButton = styled.button`
  padding: 0;
  display: none;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  svg {
    width: 20px;
    path {
      fill: var(--white);
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      path {
        fill: var(--primary);
      }
    }
  }
  @media screen and (max-width: 600px) {
    display: flex;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const menuItems = [
  //   {
  //     link: "/#",
  //     name: "HOME",
  //     icon: <HomeIcon />,
  //   },
  //   {
  //     link: "/#about",
  //     name: "ABOUT",
  //     icon: <PermIdentityIcon />,
  //   },
  //   {
  //     link: "/#portfolio",
  //     name: "PORTFOLIO",
  //     icon: <WorkIcon />,
  //   },
  //   {
  //     link: "/#blog",
  //     name: "BLOG",
  //     icon: <AssignmentIcon />,
  //   },
  //   {
  //     link: "/#contact",
  //     name: "CONTACT",
  //     icon: <MailIcon />,
  //   },
  // ];

  return (
    <Navbar>
      <Logo className="h-font">Deepesh</Logo>
      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
        <HAMBURGER_ICON />
      </MenuButton>
      <NavLinks menuOpen={menuOpen}>
        <NavLink>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </NavLink>
        <NavLink>
          <Link
            activeClass="active"
            to="about_me"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </NavLink>
        <NavLink>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </NavLink>
      </NavLinks>
    </Navbar>
  );
};

export default Header;
