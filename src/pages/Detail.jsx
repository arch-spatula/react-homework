import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CustomButton } from "../components";

const DetailStyled = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .detail-title {
    font-size: 1.5rem;
  }
  .detail-content {
    font-size: 1rem;
  }
  .show-id {
    color: #d8d8d8;
  }
  .btn-footer {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
  }
`;

const Detail = (props) => {
  const detailState = useSelector((state) => state.todo.todoItems);
  const detailLocation = useParams();
  const { title, content, id } = [...detailState].filter(
    (todo) => todo.id === detailLocation.id
  )[0];

  const navigateBack = useNavigate();
  return (
    <DetailStyled>
      <h1 className="detail-title">{title}</h1>
      <article className="detail-content">{content}</article>
      <div className="show-id">{`별로 보여주고 싶지 않았지만 보여줘야 하는 id: ${id}`}</div>
      <div className="btn-footer">
        <CustomButton hierarchy="secondary" onClick={() => navigateBack(-1)}>
          뒤로가기
        </CustomButton>
        <CustomButton onClick={() => navigateBack("/")}>홈으로</CustomButton>
      </div>
    </DetailStyled>
  );
};

export default Detail;
