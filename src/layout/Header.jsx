import styled from "styled-components";
import { Link } from "react-scroll";

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
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 2rem;
  color: var(--white);
`;

const NavLinks = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  gap: 20px;
`;

const NavLink = styled.li`
  font-size: 1rem;
  color: var(--white);
  cursor: pointer;
  transition: color 0.3s ease;
  font-weight: 300;
  &:hover {
    color: var(--primary);
  }
  a.active {
    color: var(--primary);
  }
`;

const Header = () => {
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
      <NavLinks>
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
