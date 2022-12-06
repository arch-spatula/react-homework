import React from "react";
import styled from "styled-components";
import CustomButton from "./CustomButton";

const FormContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    .input-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;
      label {
        font-size: 1rem;
        font-weight: 500;
      }
      input {
        border: solid ${1 / 16}rem #8e8e8e;
        box-sizing: border-box;
        font-size: 1rem;
        line-height: 1.25rem;
        padding: 0.5rem 0.75rem;
        border-radius: 0.5rem;
        :hover,
        :focus {
          /* border: solid ${2 / 16}rem slateblue; */
          box-shadow: inset 0 0 0 ${2 / 16}rem slateblue;
          outline: 0;
        }
      }
    }
  }
`;

const Form = ({ props }) => {
  const { todoTitle, setTodoTitle, todoContent, setTodoContent, handleSubmit } =
    props;
  return (
    <FormContainer>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(event);
        }}
      >
        <div className="input-container">
          <label htmlFor="title">제목</label>
          <input
            onChange={(event) => setTodoTitle(event.target.value)}
            type="text"
            id="title"
            placeholder="예: 1일 1커밋"
            value={todoTitle}
          />
        </div>
        <div className="input-container">
          <label htmlFor="content">내용</label>
          <input
            onChange={(event) => setTodoContent(event.target.value)}
            type="text"
            id="content"
            placeholder="예: git 명령어 정리"
            value={todoContent}
          />
        </div>
        <CustomButton hierarchy="primary">추가</CustomButton>
      </form>
    </FormContainer>
  );
};

export default Form;
