import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/From";
import Layout from "./pages/Layout";
import List from "./components/List";
// import "./App.css";
import { nanoid } from "nanoid";

function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoContent, setTodoContent] = useState("");
  const [todoList, setTodoList] = useState({ working: [], done: [] });

  const handleSubmit = () => {
    if (todoTitle && todoContent) {
      const newTodo = { todoTitle, todoContent, id: nanoid() };
      setTodoList((lists) => ({
        ...lists,
        working: [...lists.working, newTodo],
      }));
      // setter 함수로 정리하기
      setTodoTitle("");
      setTodoContent("");
    } else {
      alert("제목과 내용 모두 채워주세요");
    }
  };
  const handleDeleteWorking = (id) => {
    setTodoList((lists) => ({
      ...lists,
      working: lists.working.filter((item) => item.id !== id),
    }));
  };
  const handleWorkingToDone = (id) => {
    setTodoList((lists) => ({
      working: lists.working.filter((item) => item.id !== id),
      done: [...lists.done, ...lists.working.filter((item) => item.id === id)],
    }));
  };

  const handleDeleteDone = (id) => {
    setTodoList((lists) => ({
      ...lists,
      done: lists.done.filter((item) => item.id !== id),
    }));
  };
  const handleDoneToWorking = (id) => {
    setTodoList((lists) => ({
      done: lists.done.filter((item) => item.id !== id),
      working: [
        ...lists.working,
        ...lists.done.filter((item) => item.id === id),
      ],
    }));
  };
  return (
    <div>
      <Layout>
        <Header />
        <Form
          props={{
            todoTitle,
            setTodoTitle,
            todoContent,
            setTodoContent,
            handleSubmit,
          }}
        />
        <div className="list-container">
          <List
            title={"Working..."}
            lists={todoList.working}
            handleDelete={handleDeleteWorking}
            handleDoneWorking={handleWorkingToDone}
            itemCTAText="완료"
          />
          <List
            title={"Done..."}
            lists={todoList.done}
            handleDelete={handleDeleteDone}
            handleDoneWorking={handleDoneToWorking}
            itemCTAText="취소"
          />
        </div>
      </Layout>
    </div>
  );
}

export default App;
