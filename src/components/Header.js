import styled from "styled-components";
import React from "react";

const HeaderContainer = styled.div`
  height: 4.5rem;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f8f8;
  color: slateblue;
  padding: 0 1.5rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h2>My todo lits</h2>
      <h2>React</h2>
    </HeaderContainer>
  );
};

export default Header;
