import styled from "styled-components";
import Todo from "./Todo";
const ListContainer = styled.div`
  width: 50%;
  .column-title {
    padding: 0 0.5rem;
  }
  .list-column-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 0.5rem;
  }
`;

const List = ({
  title,
  lists,
  handleDelete,
  handleDoneWorking,
  itemCTAText,
}) => {
  return (
    <ListContainer>
      <h2 className="column-title">{title}</h2>
      <div className="list-column-container">
        {lists.map((list) => (
          <Todo
            key={list.id.toString()}
            props={list}
            handleDelete={handleDelete}
            handleDoneWorking={handleDoneWorking}
            itemCTAText={itemCTAText}
          />
        ))}
      </div>
    </ListContainer>
  );
};

export default List;
