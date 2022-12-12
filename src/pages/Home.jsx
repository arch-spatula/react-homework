import { Form, List } from "../components/index";
import styled from "styled-components";

const HomeStyled = styled.div`
  width: 100%;
  .lists-container {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
  }
`;

const Home = (props) => {
  return (
    <HomeStyled>
      <Form />
      {/* Todo width 2등분하기 */}
      <div className="lists-container">
        <List className="list-column" title="Working..." kind="Working" />
        <List className="list-column" title="Done..." kind="Done" />
      </div>
    </HomeStyled>
  );
};

export default Home;
