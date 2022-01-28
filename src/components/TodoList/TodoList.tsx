import React, { VFC } from "react";
import TodosHeader from "./TodosHeader";
import "./TodoList.css";
import Todo from "../Todo";
import { useState } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "./../../redux";
import { ITodo } from "../../types";
import AddFormModal from "./../Modal/ModalForm/AddFormModal";
const TodoList: VFC = () => {
  const todos = useSelector((state: IRootState) => state.todos.todos);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <section className="todos__list">
      <TodosHeader onClick={() => setIsOpen(true)} />
      {isOpen && <AddFormModal setIsOpen={setIsOpen} />}

      {todos.length > 0 ? (
        <div className="todos__list__row">
          {todos.map((todo: ITodo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div>
      ) : (
        "No Todos"
      )}
    </section>
  );
};

export default TodoList;
