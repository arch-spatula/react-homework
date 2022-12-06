// 레이아웃 책임을 분리합니다.
import styled from "styled-components";
import React from "react";

const LayoutContainer = styled.div`
  width: 75rem;
  margin: 0 auto;
  .list-container {
    display: flex;
  }
`;

const Layout = (props) => {
  return <LayoutContainer>{props.children}</LayoutContainer>;
};

export default Layout;
