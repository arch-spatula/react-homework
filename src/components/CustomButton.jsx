import styled from "styled-components";

const ButtonStyled = styled.button`
  cursor: pointer;
  font-weight: 700;
  /* hierarchy: primary, secondary */
  color: ${(props) => (props.hierarchy ? "slateblue" : "white")};
  background-color: ${(props) => (props.hierarchy ? "white" : "slateblue")};

  border: solid ${1 / 16}rem slateblue;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  width: fit-content;
  height: fit-content;
`;

const CustomButton = ({ hierarchy, children, onClick }) => {
  return (
    <ButtonStyled hierarchy={hierarchy} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default CustomButton;
