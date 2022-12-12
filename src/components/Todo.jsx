import styled from "styled-components";
import { CustomButton } from "./index";
import { deleteItem } from "../redux/modules/todo";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const TodoStyled = styled.div`
  border: solid ${1 / 16}rem slateblue;
  border-radius: 0.75rem;
  padding: 1rem;
  .todo-title {
    color: black;
    font-size: 1.25rem;
    :hover {
      color: slateblue;
      cursor: pointer;
    }
  }
  .todo-content {
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 0.5rem 0 0.75rem;
  }
  .todo-footer {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }
`;

const Todo = ({ title, content, primaryBTN: { text, action }, id }) => {
  // 목록 삭제를 위한 useDispatch입니다.
  const dispatch = useDispatch();
  return (
    <TodoStyled>
      <Link to={`detail/${id}`}>
        <h3 className="todo-title">{title}</h3>
      </Link>
      <p className="todo-content">{content}</p>
      <div className="todo-footer">
        <CustomButton
          hierarchy="secondary"
          onClick={() => dispatch(deleteItem(id))}
        >
          삭제
        </CustomButton>
        <CustomButton onClick={() => dispatch(action(id))}>{text}</CustomButton>
      </div>
    </TodoStyled>
  );
};

export default Todo;
