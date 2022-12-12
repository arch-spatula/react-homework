import styled, { createGlobalStyle } from "styled-components";
import { CustomHeader, CustomFooter } from "../components";

export const GlobalStyled = createGlobalStyle`
  /* CSS RESET */
  * {
      padding: 0;
      border: 0;
      margin: 0;
      font-size: 16px;
  }

  a {text-decoration: none;}

  li {list-style: none;}

  input {
      appearance: none;
      outline: none;
  }

  table {border-collapse: collapse;}
`;

const MainStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .main-container {
    min-width: 50rem;
    width: 75rem;
    min-height: calc(100vh - 4.75rem);
    height: 100%;
    margin: 2rem 2rem 4rem;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyled />
      <CustomHeader />
      <MainStyled>
        <main className="main-container">{children}</main>
      </MainStyled>
      <CustomFooter />
    </>
  );
};

export default Layout;
