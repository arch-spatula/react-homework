import React from "react";
import styled from "styled-components";

/*

  render() {
    return (
      <div className="App">
        <MyStyled bgColor="slateblue">???</MyStyled>
        </div>
        );
      }
    }
    const MyStyled = styled.div`
      width: 50vw;
      background: ${(props) => props.bgColor ?? "springgreen"};
      height: 50vh;
    `;

*/

// color, hierarchy: primary, Secondary
const CustomButtonContainer = styled.button`
  font-size: 1rem;
  border: none;
  background-color: ${(props) =>
    props.color && props.hierarchy !== "primary" ? "white" : "slateblue"};
  color: ${(props) => (props.hierarchy !== "primary" ? props.color : "white")};
  border: solid ${1 / 16}rem
    ${(props) => (props.hierarchy !== "primary" ? null : props.color)};
  font-weight: 700;
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  width: auto;
`;

// slateblue
const CustomButton = ({ children, onClick, color, hierarchy }) => {
  return (
    <CustomButtonContainer
      hierarchy={hierarchy}
      color={color}
      onClick={onClick}
    >
      {children}
    </CustomButtonContainer>
  );
};

export default CustomButton;
