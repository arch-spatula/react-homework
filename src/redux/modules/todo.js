import { nanoid } from "nanoid";

const ADD_SUBMIT_ITEM = "ADD_SUBMIT_ITEM";
const DELETE_ITEM = "DELETE";
const MOVE_ITEM_WORKING_TO_DONE = "MOVE_ITEM_WORKING_TO_DONE";
const MOVE_ITEM_DONE_TO_WORKING = "MOVE_ITEM_DONE_TO_WORKING";

// action create 함수만 모읍니다.
export const addSubmit = (payload) => {
  return {
    type: ADD_SUBMIT_ITEM,
    payload,
  };
};

export const deleteItem = (payload) => {
  return {
    type: DELETE_ITEM,
    payload,
  };
};

export const moveItemDoneToWorking = (payload) => {
  return {
    type: MOVE_ITEM_DONE_TO_WORKING,
    payload,
  };
};

export const moveItemWorkingToDone = (payload) => {
  return {
    type: MOVE_ITEM_WORKING_TO_DONE,
    payload,
  };
};

/**
 * id는 DB에서 해쉬값을 참조할 수 없기 때문에 임의의 해쉬값을 각 목록마다 지정합니다.
 * kind는 목록에 표시할 유형을 나타낸 것입니다. 확장성을 위해 Boolean 대신 String을 넣습니다.
 */
const initialState = {
  todoItems: [
    {
      id: nanoid(),
      kind: "Working",
      content: "Jotai, Zustand, ContextAPI & React-Query는 마음만 품기",
      title: "리덕스 천하통일은 영원할 것이라고 인정하기",
    },
    {
      id: nanoid(),
      kind: "Done",
      content:
        "webpack으로 빌드하는 내용이 강의자료에 없으면 실습은 Vite으로 설치하고 혼자 꿀빨기",
      title: "Vite 몰래 혼자쓰기",
    },
  ],
};

const todo = (state = initialState, action) => {
  const copedState = { todoItems: [...state.todoItems] };
  const getItemIndex = (copedState) =>
    copedState.todoItems.findIndex((item) => item.id === action.payload);

  switch (action.type) {
    case MOVE_ITEM_WORKING_TO_DONE:
      const movedItemWorkingToDone = copedState.todoItems.splice(
        getItemIndex(copedState),
        1
      )[0];
      movedItemWorkingToDone.kind = "Done";
      copedState.todoItems.push(movedItemWorkingToDone);
      return copedState;

    case MOVE_ITEM_DONE_TO_WORKING:
      const movedItemDoneToWorking = copedState.todoItems.splice(
        getItemIndex(copedState),
        1
      )[0];
      movedItemDoneToWorking.kind = "Working";
      copedState.todoItems.push(movedItemDoneToWorking);
      return copedState;

    case DELETE_ITEM:
      copedState.todoItems.splice(getItemIndex(copedState), 1);
      return copedState;

    case ADD_SUBMIT_ITEM:
      copedState.todoItems.push(action.payload);
      return copedState;

    default:
      return state;
  }
};
export default todo;
