import styled from "styled-components";
import profileImage from "../../assets/Imgs/deepesh-rohilla-user.jpeg";
import bg from "../../assets/Imgs/bg.jpg";
import { GITHUB_ICON, LINKEDIN_ICON } from "../UI/Icons";

// Styled Components
const ContactContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: var(--white);
  text-align: center;
  padding: 50px 5%;
  position: relative;
  z-index: 1;
  min-height: 100vh;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    opacity: 0.08;
  }
  @media screen and (max-width: 600px){
    padding: 30px 3%;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 20px auto;
  position: relative;
  padding-bottom: 15px;
  max-width: 300px;
  height: max-content;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 35%;
    height: 3px;
    background-color: var(--primary);
  }
  &::after {
    content: "";
    position: absolute;
    left: 40%;
    bottom: 0;
    width: 5%;
    height: 3px;
    background-color: var(--white);
  }
  @media screen and (max-width: 900px){
    font-size: 1.8rem;
  }
  @media screen and (max-width: 600px){
    font-size: 1.5rem;
    margin: 0 auto 20px;
  }
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 20px auto;
  border: 2px solid var(--white);
`;

const ContactDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  width: 650px;
  max-width: 650px;
  margin: 0 auto;
  background: var(--secondary);
  border-bottom: 1px solid var(--primary);
  padding: 25px;
  a {
    color: var(--primary);
    word-wrap: break-word;
  }
  @media screen and (max-width: 900px){
    width: 100%;
  }
  @media screen and (max-width: 600px){
    padding: 15px;
    a {
      font-size: 0.8rem;
    }
  }
`;

const SocialMedia = styled.div`
  width: 650px;
  max-width: 650px;
  margin: 0 auto;
  background: var(--secondary);
  padding: 25px;
  p {
    margin-bottom: 15px;
    font-size: 1rem;
    font-weight: 200;
  }
  @media screen and (max-width: 900px){
    width: 100%;
  }
  @media screen and (max-width: 600px){
    padding: 15px;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  a {
    display: inline-block;
    svg {
      fill: var(--white);
      path {
        fill: var(--white);
      }
    }
  }
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <Title className="h-font">Contact</Title>
      <ProfileImage src={profileImage} alt="Profile" />
      <ContactDescription>
        If you are interested in hiring me for your project/company, please feel
        free to get in touch with{" "}
        <a href="mailto:deepeshrohilla211@gmail.com" className="h-font">
          deepeshrohilla211@gmail.com
        </a>
      </ContactDescription>
      <SocialMedia>
        <p>You can also find me on these social media.</p>
        <Icons>
          <a
            href="https://github.com/rdeepesh"
            target="_blank"
            rel="noreferrer"
          >
            <GITHUB_ICON />
          </a>
          <a
            href="https://www.linkedin.com/in/irdeepesh/"
            target="_blank"
            rel="noreferrer"
          >
            <LINKEDIN_ICON />
          </a>
        </Icons>
      </SocialMedia>
    </ContactContainer>
  );
};

export default Contact;
