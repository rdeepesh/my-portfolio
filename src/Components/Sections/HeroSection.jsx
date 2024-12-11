import styled from "styled-components";
import deepeshRohillaIMG from "../../assets/Imgs/deepesh-rohilla.png";
import ScrollIndicator from "../UI/ScrollIndicator";

const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 0 5%;
  color: var(--white);
  @media screen and (max-width: 600px) {
    padding: 0 3%;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  @media screen and (max-width: 600px) {
    width: 60%;
  }
`;

const Heading = styled.h1`
  margin: 70px 0 25px;
  color: var(--white);
  font-size: 5.5rem;
  line-height: 1;
  @media screen and (max-width: 900px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 750px) {
    font-size: 3.5rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 0;
  font-weight: 200;
  color: var(--white);
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  @media screen and (max-width: 600px) {
    position: absolute;
    bottom: 0;
    left: 40%;
    width: 60%;
    overflow: hidden;
  }
  img {
    max-width: 100%;
    height: auto;
    max-height: 100%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.25;
    @media screen and (max-width: 600px) {
      max-width: 250%;
      transform: translateX(-29%);
      opacity: 0.15;
    }
    @media screen and (max-width: 500px) {
      max-width: 200%;
    }
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <LeftSection>
        <Heading>
          <span className="h-font">
            DEEPESH
            <br />
            ROHILLA
          </span>
        </Heading>
        <Description>
          Hello, my name is Deepesh Rohilla a Full-Stack Developer, nice to meet
          you.
          <br />I would like to welcome you with my personal portfolio.
        </Description>
      </LeftSection>
      <RightSection>
        <img src={deepeshRohillaIMG} alt="Deepesh Rohilla" />
      </RightSection>
      {/* Scroll Indicator */}
      <ScrollIndicator />
    </HeroContainer>
  );
};

export default HeroSection;
