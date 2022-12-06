import styled from "styled-components";
import CustomButton from "./CustomButton";

const TodoContainer = styled.div`
  border: slateblue solid ${1 / 16}rem;
  border-radius: 1rem;
  padding: 1rem;

  h2 {
    font-size: 1.75rem;
    line-height: 2rem;
    margin: 0;
  }
  p {
    font-size: 1rem;
    line-height: 1.25rem;
    margin: 1rem 0;
  }

  .todo-BTN {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }
`;

const Todo = ({ props, handleDelete, handleDoneWorking, itemCTAText }) => {
  const { todoTitle, todoContent, id } = props;

  return (
    <TodoContainer>
      <h2>{todoTitle}</h2>
      <p>{todoContent}</p>
      <div className="todo-BTN">
        <CustomButton
          color="slateblue"
          hierarchy="secondary"
          onClick={() => {
            handleDelete(id);
          }}
        >
          삭제
        </CustomButton>
        <CustomButton
          hierarchy="primary"
          onClick={() => {
            handleDoneWorking(id);
          }}
        >
          {itemCTAText}
        </CustomButton>
      </div>
    </TodoContainer>
  );
};

export default Todo;
