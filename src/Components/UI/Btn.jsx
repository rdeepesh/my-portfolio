import styled from "styled-components";

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  border: 2px solid var(--primary);
  background-color: ${(props) =>
    props.primary ? "var(--primary)" : "transparent"};
  color: ${(props) => (props.primary ? "var(--primary)" : "var(--white)")};
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.primary ? "var(--primary)" : "var(--primary)"};
    color: var(--white);
  }
`;

const Btn = (props) => {
  return (
    <Button className="h-font" {...props}></Button>
  );
};

export default Btn;
