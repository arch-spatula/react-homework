import styled from "styled-components";

const FooterStyled = styled.footer`
  background-color: #636e72;
  height: 15rem;
`;

const CustomFooter = ({ children }) => {
  return <FooterStyled>{children}</FooterStyled>;
};

export default CustomFooter;
