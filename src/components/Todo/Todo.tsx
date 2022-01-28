import { VFC, memo } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/actions/todoActions";
import { BiTrash } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";

import { ITodo } from "../../types";
import "./Todo.css";
interface TodoProps {
  todo: ITodo;
}

const Todo: VFC<TodoProps> = memo(({ todo }) => {
  const dispatch = useDispatch();
  return (
    <article className="todo">
      <div className="todo__title">
        <h1>{todo.title}</h1>
        <i onClick={() => dispatch(deleteTodo(todo.id))}>
          <BiTrash />
        </i>
      </div>
      <p>{todo.description}</p>
      <div className="todo__footer">
        <div className="todo__footer__status">
          <h4>
            <i>
              <AiOutlineUser />
            </i>{" "}
            {todo.member}
          </h4>
        </div>
        <label
          className={
            todo.status === "Todo"
              ? "label__todo"
              : todo.status === "In Progress"
              ? "label__inprogress"
              : todo.status === "Completed"
              ? "label__done"
              : ""
          }
        >
          {todo.status}
        </label>
      </div>
    </article>
  );
});

export default Todo;
