import { useState, useRef } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addSubmit } from "../redux/modules/todo";
import { CustomButton, CustomInput } from "./index";
import styled from "styled-components";

// TODO TIL에 styled.form은 지원하지 않는다고 추가하기
const FormStyled = styled.div`
  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    .input-wrapper {
      width: 15rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      label {
        font-weight: 700;
      }
      input {
        border: solid ${1 / 16}rem #d8d8d8;
        padding: 0.5rem 0.75rem;
        border-radius: 0.5rem;
        :hover,
        :focus {
          box-shadow: inset 0 0 0 ${2 / 16}rem slateblue;
          outline: 0;
        }
      }
      .user-helper-text {
        color: white;
      }
    }
  }
`;

const Form = (props) => {
  // local state
  const [titleText, setTitleText] = useState("");
  const [contentText, setContentText] = useState("");

  const handleTitleText = (event) => {
    setTitleText(event.target.value);
  };
  const handleContentText = (event) => {
    setContentText(event.target.value);
  };

  // inputHelper text 보이고 안 보이고 제어
  const [titleHelper, setTitleHelper] = useState(false);
  const [contentHelper, setContentHelper] = useState(false);
  const titleHelperRef = useRef(null);
  const contentHelperRef = useRef(null);

  // global state
  const dispatch = useDispatch();
  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (titleText && contentText) {
      const newItem = {
        id: nanoid(),
        kind: "Working",
        content: contentText,
        title: titleText,
      };
      dispatch(addSubmit(newItem));
      // 초기화
      setTitleText("");
      setContentText("");
      setTitleHelper(false);
      setContentHelper(false);
    } else if (!titleText && contentText) {
      // 제목을 입력해주세요
      setTitleHelper(true);
      titleHelperRef.current.focus();
    } else if (titleText && !contentText) {
      // 내용을 입력해주세요
      setContentHelper(true);
      contentHelperRef.current.focus();
    } else {
      // 제목과 내용 모두 입력해주세요
      setTitleHelper(true);
      setContentHelper(true);
      titleHelperRef.current.focus();
    }
  };

  return (
    <FormStyled>
      <form
        onSubmit={(event) => {
          handleOnSubmit(event);
        }}
      >
        <CustomInput
          handleOnChange={handleTitleText}
          placeholder="예: 1일 1커밋"
          inputValue={titleText}
          customLabel="제목"
          helperText="제목을 입력해주세요"
          showHelperText={titleHelper}
          parentRef={titleHelperRef}
        />
        <CustomInput
          handleOnChange={handleContentText}
          placeholder="예: git 명령어 정리"
          inputValue={contentText}
          customLabel="내용"
          helperText="내용을 입력해주세요"
          showHelperText={contentHelper}
          parentRef={contentHelperRef}
        />
        <CustomButton>추가</CustomButton>
      </form>
    </FormStyled>
  );
};

export default Form;
