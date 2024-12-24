import styled from "styled-components";
import Btn from "../UI/Btn";
import {
  BOOTSTRAP_ICON,
  CSS_ICON,
  EXPRESSJS_ICON,
  GIT_ICON,
  HTML_ICON,
  JS_ICON,
  MATERIALUI_ICON,
  MONGODB_ICON,
  MYSQL_ICON,
  NEXTJS_ICON,
  NODEJS_ICON,
  PAYPAL_ICON,
  PDF_ICON,
  REACT_ICON,
  REDIS_ICON,
  REDUX_ICON,
  STRIPE_ICON,
  STYLED_COMPONENT_ICON,
  TAILWIND_ICON,
  TYPESCRIPT_ICON,
} from "../UI/Icons";

// Styled Components
const Section = styled.section`
  background-color: var(--secondary);
  color: var(--white);
  padding: 50px 5%;
  @media screen and (max-width: 600px) {
    padding: 50px 3%;
  }
`;

const AboutSection = styled.div`
  display: flex;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 20px;
  height: max-content;
  padding-bottom: 15px;
  width: 35%;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 20%;
    height: 3px;
    background-color: var(--primary);
  }
  &::after {
    content: "";
    position: absolute;
    left: 22.5%;
    bottom: 0;
    width: 2.5%;
    height: 3px;
    background-color: var(--white);
  }
  @media screen and (max-width: 900px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    font-size: 1.5rem;
  }
`;

const AboutList = styled.ul`
  flex: 1;
  list-style: none;
  padding: 0;
  margin: 20px 0 40px;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    font-size: 1.2rem;
    font-weight: 200;
    color: var(--white);
    span {
      font-size: 1.5rem;
      font-weight: 300;
      margin-right: 30px;
      color: var(--primary);
    }
    @media screen and (max-width: 600px) {
      font-size: 1rem;
      span {
        font-size: 1.2rem;
        margin-right: 20px;
      }
    }
  }
`;

const ExperienceSection = styled.div`
  display: flex;
  margin-bottom: 70px;
  h3 {
    flex: 1;
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 900px) {
    h3 {
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 40px;
    h3 {
      font-size: 1.3rem;
      margin-bottom: 0;
    }
  }
`;

const SkillsSection = styled.div`
  display: flex;
  margin-bottom: 70px;
  div {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 60px;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      svg {
        width: 50px;
        height: 50px;
        fill: var(--white);
        path {
          fill: var(--white);
        }
      }
      p {
        font-size: 1.2rem;
        color: var(--white);
        font-weight: 400;
        margin-top: 10px;
      }
    }
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 40px;
    div {
      margin-top: 20px;
      gap: 30px;
      span {
        svg {
          width: 30px;
          height: 30px;
        }
        p {
          font-size: 1rem;
          font-weight: 200;
        }
      }
    }
  }
`;

const ResumeSection = styled.div`
  display: flex;
  margin-bottom: 40px;

  div {
    flex: 1;

    h4 {
      font-size: 1.5rem;
      font-weight: 400;
      margin-bottom: 20px;
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 20px;
        height: 20px;
        fill: var(--white);
        margin-left: 10px;
      }
    }
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 0px;
    div {
      h4 {
        font-size: 1.3rem;
      }
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
      }
    }
  }
`;

const AboutMe = () => {
  const handleDownloadResume = () => {
    window.open("/DeepeshRohilla_FullStackDeveloper_Resume.pdf", "target");
  };

  return (
    <Section id="about_me">
      <AboutSection>
        <Heading className="h-font">About Me</Heading>
        <AboutList>
          <li>
            <span>&lt;/&gt;</span> {"I'm"} a Full-Stack Developer based in
            India.
          </li>
          <li>
            <span>&lt;/&gt;</span> I like to design and build beautiful and
            functional websites and web applications, taking special care to
            produce clear and understandable code.
          </li>
          <li>
            <span>&lt;/&gt;</span> I love teamwork and good communication,
            always open to feedback and willing to learn new things.
          </li>
          <li>
            <span>&lt;/&gt;</span> In my free time I like to learn new skills or
            read a good book or play mobile games.
          </li>
        </AboutList>
      </AboutSection>

      <ExperienceSection>
        <Heading className="h-font">Experience</Heading>
        <h3>
          I have around 4 years of hands-on industry level experience..
        </h3>
      </ExperienceSection>

      <SkillsSection>
        <Heading className="h-font">Skills</Heading>
        <div>
          <span>
            <HTML_ICON />
            <p>HTML</p>
          </span>
          <span>
            <CSS_ICON />
            <p>CSS</p>
          </span>
          <span>
            <JS_ICON />
            <p>JavaScript</p>
          </span>
          <span>
            <TYPESCRIPT_ICON />
            <p>TypeScript</p>
          </span>
          <span>
            <NEXTJS_ICON />
            <p>Next</p>
          </span>
          <span>
            <REACT_ICON />
            <p>React</p>
          </span>
          <span>
            <REDUX_ICON />
            <p>Redux</p>
          </span>
          <span>
            <BOOTSTRAP_ICON />
            <p>Bootstrap</p>
          </span>
          <span>
            <MATERIALUI_ICON />
            <p>MUI</p>
          </span>
          <span>
            <TAILWIND_ICON />
            <p>Tailwind</p>
          </span>
          <span>
            <STYLED_COMPONENT_ICON />
            <p>Styled Component</p>
          </span>
          <span>
            <NODEJS_ICON />
            <p>Node</p>
          </span>
          <span>
            <EXPRESSJS_ICON />
            <p>Express</p>
          </span>
          <span>
            <MONGODB_ICON />
            <p>MongoDB</p>
          </span>
          <span>
            <MYSQL_ICON />
            <p>MySQL</p>
          </span>
          <span>
            <REDIS_ICON />
            <p>Redis</p>
          </span>
          <span>
            <GIT_ICON />
            <p>Git</p>
          </span>
          <span>
            <PAYPAL_ICON />
            <p>PayPal</p>
          </span>
          <span>
            <STRIPE_ICON />
            <p>Stripe</p>
          </span>
        </div>
      </SkillsSection>

      {/* <ResumeSection>
        <Heading className="h-font">Resume</Heading>
        <div>
          <h4>You can check my resume in the link below.</h4>
          <Btn onClick={handleDownloadResume}>
            Download Resume
            <PDF_ICON />
          </Btn>
        </div>
      </ResumeSection> */}
    </Section>
  );
};

export default AboutMe;
