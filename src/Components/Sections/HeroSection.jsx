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
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Heading = styled.h1`
  margin: 70px 0 25px;
  color: var(--white);
  font-size: 5.5rem;
  line-height: 1;
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
  height: 100%;
  position: relative;
  img {
    max-width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    opacity: 0.25;
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
