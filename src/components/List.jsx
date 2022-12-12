import styled from "styled-components";
import { useSelector } from "react-redux";
import { Todo } from "./index";
import {
  moveItemDoneToWorking,
  moveItemWorkingToDone,
} from "../redux/modules/todo";

const ListStyled = styled.section`
  width: 100%;
  .list-title {
    font-size: 1.5rem;
    margin: 1rem 0 1.25rem;
  }
  .todo-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
`;

/**
 * modules/todo.js의 데이터 구조를 참조해서 props를 설계했습니다.
 * todo 컴포넌트에 대해 의존성을 갖습니다.
 * @param {*} props
 * @returns component
 */
const List = ({ title, kind }) => {
  const allLists = useSelector((state) => state.todo.todoItems);
  const filteredList = allLists.filter((item) => item.kind === kind);

  return (
    <ListStyled>
      <h2 className="list-title">{title}</h2>
      <div className="todo-wrapper">
        {filteredList.map((item) => {
          const { id, title, content, kind } = item;
          /**
           * 새로운 유형추가를 대응하기 위해 switch-case문으로 작성합니다. 하나의 유형이 추가 되면 case 추가하는 것으로 대응합니다.
           */
          let primaryBTN = {};
          switch (kind) {
            case "Working":
              primaryBTN.text = "완료";
              primaryBTN.action = moveItemWorkingToDone;
              break;
            case "Done":
              primaryBTN.text = "취소";
              primaryBTN.action = moveItemDoneToWorking;
              break;
            default:
              primaryBTN.text = "???";
              break;
          }
          return (
            <Todo
              key={id}
              id={id}
              title={title}
              content={content}
              primaryBTN={primaryBTN}
            />
          );
        })}
      </div>
    </ListStyled>
  );
};

export default List;
