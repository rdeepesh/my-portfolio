import styled from "styled-components";
import FyndecorIMG from "../../assets/Imgs/projects/fyndecor.png";
import JaldharaSupplyIMG from "../../assets/Imgs/projects/jaldhara-supply.png";
import { LINK_ICON } from "../UI/Icons";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  color: var(--white);
  padding: 70px 5% 100px;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 600px) {
    padding: 50px 3% 80px;
  }
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: var(--secondary);
    opacity: 0.6;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0 auto 20px;
  position: relative;
  padding-bottom: 15px;
  max-width: 400px;
  height: max-content;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 25%;
    height: 3px;
    background-color: var(--primary);
  }
  &::after {
    content: "";
    position: absolute;
    left: 28%;
    bottom: 0;
    width: 3%;
    height: 3px;
    background-color: var(--white);
  }
  @media screen and (max-width: 900px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
    margin: 0 auto 20px;
  }
`;

const ProjectsContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    margin-top: 1.5rem;
  }
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  margin-bottom: 60px;
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (max-width: 900px) {
    margin-bottom: 35px;
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const CardInner = styled.div`
  position: relative;
  width: 50%;
  height: 15rem;
  border-radius: 1.25rem;
  border-bottom-right-radius: 0;
  overflow: hidden;
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 11rem;
    border-radius: 1rem;
  }
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1.25rem;
  overflow: hidden;
`;

const ImgBox = styled.div`
  position: absolute;
  inset: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Icon = styled.div`
  position: absolute;
  bottom: -0.375rem;
  right: -0.375rem;
  width: 5rem;
  height: 5rem;
  background: #030236;
  border-top-left-radius: 50%;
  &::before {
    position: absolute;
    content: "";
    bottom: 0.375rem;
    left: -1.25rem;
    background: transparent;
    width: 1.25rem;
    height: 1.25rem;
    border-bottom-right-radius: 1.25rem;
    box-shadow: 0.313rem 0.313rem 0 0.313rem #030236;
  }

  &::after {
    position: absolute;
    content: "";
    top: -1.25rem;
    right: 0.375rem;
    background: transparent;
    width: 1.25rem;
    height: 1.25rem;
    border-bottom-right-radius: 1.25rem;
    box-shadow: 0.313rem 0.313rem 0 0.313rem #030236;
  }
  @media screen and (max-width: 600px) {
    width: 4rem;
    height: 4rem;
  }
`;

const IconBox = styled.a`
  position: absolute;
  inset: 0.625rem;
  background: var(--white);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  cursor: pointer;
  svg {
    width: 40px;
    height: 40px;
    path {
      stroke: var(--primary);
    }
  }
  &:hover {
    background: var(--primary);
    transform: rotate(180deg);
    svg {
      path {
        stroke: var(--white);
      }
    }
  }
  @media screen and (max-width: 600px) {
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

const Content = styled.div`
  padding: 0 30px;
  flex: 1;
  display: flex;
  flex-direction: column;
  h3 {
    text-transform: uppercase;
    font-size: 1.5rem;
    line-height: 1;
    margin-bottom: 15px;
  }
  p {
    font-size: 0.9rem;
    color: var(--white);
    font-weight: 200;
  }
  h5 {
    font-size: 1rem;
    font-weight: 400;
    margin: 10px 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    li {
      border-radius: 50px;
      padding: 5px 12px;
      font-size: 0.7rem;
      background-color: var(--primary);
      color: var(--white);
    }
  }
  @media screen and (max-width: 600px) {
    padding: 15px 0 0;
    h3 {
      font-size: 1rem;
    }
    p {
      font-size: 0.7rem;
    }
    h5 {
      font-size: 0.75rem;
      margin: 7px 0;
    }
    ul {
      gap: 7px;
      li {
        font-size: 0.6rem;
      }
    }
  }
`;

const Projects = () => {
  const projectList = [
    {
      id: "pro_01",
      image: FyndecorIMG,
      altText: "Fyndecor",
      name: "Fyndecor",
      description:
        "Design your home with Customized Curtains, Blinds Stitching and Fitting Services available in Gurugram.",
      url: "https://fyndecor.com/",
      techStacks: [
        "TypeScript",
        "Next",
        "React",
        "Redux",
        "Tailwind CSS",
        "Axios",
        "Formik",
        "Yup",
        "React-Toastify",
      ],
    },
    {
      id: "pro_02",
      image: JaldharaSupplyIMG,
      altText: "Jaldhara Supply",
      name: "Jaldhara Supply",
      description:
        "A revolutionary web/mobile application designed to streamline and optimize your daily water supply management system.",
      url: "http://staging.alphonic.net.in:7104/",
      techStacks: [
        "React",
        "Context API",
        "Axios",
        "Formik",
        "Yup",
        "React-Toastify",
        "Phonepe Payment Gateway",
      ],
    },
  ];

  return (
    <Section id="projects">
      <Title className="h-font">My Projects</Title>
      <ProjectsContainer>
        {projectList?.map(
          ({ id, image, altText, name, description, url, techStacks }) => (
            <Card key={id}>
              <CardInner>
                <Box>
                  <ImgBox>
                    <img src={image} alt={altText} />
                  </ImgBox>
                  <Icon>
                    <IconBox href={url} target="_blank" rel="noreferrer">
                      <LINK_ICON />
                    </IconBox>
                  </Icon>
                </Box>
              </CardInner>
              <Content>
                <h3 className="h-font">{name}</h3>
                <p>{description}</p>
                <h5 className="h-font">Tech Stacks</h5>
                <ul>
                  {techStacks?.length > 0 ? (
                    techStacks?.map((item, key) => <li key={key}>{item}</li>)
                  ) : (
                    <li>N.A</li>
                  )}
                </ul>
              </Content>
            </Card>
          )
        )}
      </ProjectsContainer>
    </Section>
  );
};

export default Projects;
