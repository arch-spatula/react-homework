import styled from "styled-components";
import { nanoid } from "nanoid";

/**
 * 작업 보류하겠습니다.
 */

const InputStyled = styled.div`
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
    color: slateblue;
    visibility: ${(props) => (props.showHelperText ? "visible" : "hidden")};
  }
`;

const CustomInput = ({
  type,
  placeholder,
  customLabel,
  handleOnChange,
  inputValue,
  helperText,
  showHelperText,
  parentRef,
}) => {
  // customLabel이 존재하면 nanoid를 실행합니다. id를 동적으로 주입합니다.
  const uniqueId = nanoid();
  return (
    <InputStyled showHelperText={showHelperText}>
      <label htmlFor={uniqueId}>{customLabel}</label>
      <input
        onChange={(e) => handleOnChange(e)}
        placeholder={placeholder}
        value={inputValue}
        id={uniqueId}
        type={type ?? "text"}
        ref={parentRef}
      ></input>
      <p className="user-helper-text">{helperText}</p>
    </InputStyled>
  );
};

/*
const TestComponent = () => {
  const [inputState, setInputState] = useState("");
  const handleInputChange = (event) => {
    setInputState(event.target.value);
  };
  return (
    <div>
      <CustomInput
        customLabel="아이디"
        placeholder="user@E-mail.com"
        value={inputState}
        onChange={handleInputChange}
      />
    </div>
  );
};
*/

export default CustomInput;
