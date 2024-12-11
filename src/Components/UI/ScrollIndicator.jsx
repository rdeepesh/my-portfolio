import styled, { keyframes } from "styled-components";

/* Scroll Animation */
const scrollAnimation = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(10px);
    opacity: 0.5;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;


/* Scroll Container */
const ScrollContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

/* Mouse Design */
const Mouse = styled.div`
  width: 25px;
  height: 40px;
  border: 1.5px solid white;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;
`;

/* Scroll Wheel */
const ScrollWheel = styled.div`
  width: 4px;
  height: 8px;
  background: white;
  border-radius: 10px;
  animation: ${scrollAnimation} 1.5s ease-in-out infinite;
`;

const ScrollIndicator = () => {
    return (
      <ScrollContainer>
        <Mouse>
          <ScrollWheel />
        </Mouse>
      </ScrollContainer>
    );
  };
  
  export default ScrollIndicator;