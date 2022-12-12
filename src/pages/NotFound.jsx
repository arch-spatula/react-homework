import styled from "styled-components";
import { CustomButton } from "../components";
import { useNavigate } from "react-router-dom";

const NotFoundStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  .not-found-title {
    font-size: 2rem;
    text-align: center;
    margin: 5rem;
  }
  .home-BTN {
    margin: 0 auto;
  }
`;

const NotFound = () => {
  const goBackHome = useNavigate();
  return (
    <NotFoundStyled>
      <h1 className="not-found-title">??????</h1>
      <div className="home-BTN">
        <CustomButton onClick={() => goBackHome("/")}>
          홈으로 돌아가기
        </CustomButton>
      </div>
    </NotFoundStyled>
  );
};

export default NotFound;
