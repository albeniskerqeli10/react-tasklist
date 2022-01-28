import "./TodosHeader.css";
import { useDispatch } from "react-redux";
import {
  showAllTodos,
  showTodos,
  showProgressTodos,
  showCompletedTodos,
} from "./../../redux/actions/todoActions";
import { VFC } from "react";
type TodosHeaderProps = {
  onClick: () => void;
};
const TodosHeader: VFC<TodosHeaderProps> = ({ onClick }) => {
  const dispatch = useDispatch();
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue:string = e.target.value;
    if (selectedValue === "all") {
      dispatch(showAllTodos());
    }
    if (selectedValue === "Todo") {
      dispatch(showTodos());
    }

    if (selectedValue === "In Progress") {
      dispatch(showProgressTodos());
    }
    if (selectedValue === "Completed") {
      dispatch(showCompletedTodos());
    }
  };

  return (
    <div className="todo__header">
      <div className="todo__header__row">
        <h1>Todos</h1>
        <div className="todo__labels">
          <button onClick={onClick}>Add Todo</button>
          <select onChange={handleSelectChange}>
            <option value="all">All Todos</option>

            <option value="Todo">To-Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TodosHeader;
