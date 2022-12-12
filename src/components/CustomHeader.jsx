import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyled = styled.header`
  height: auto;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  .header-title {
    min-width: 50rem;
    width: 75rem;
    margin: 1.5rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      color: slateblue;
      font-size: 1.5rem;
    }
  }
`;

const CustomHeader = () => {
  return (
    <HeaderStyled>
      <div className="header-title">
        <Link to="/">
          <h2>My Todo List</h2>
        </Link>
        <h2>React</h2>
      </div>
    </HeaderStyled>
  );
};

export default CustomHeader;
