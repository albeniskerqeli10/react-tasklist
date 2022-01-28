import { fetchUsers } from "../../../redux/actions/userActions";
import { useEffect, VFC, SetStateAction, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../../redux/actions/todoActions";
import { ITodo, IUser } from "../../../types";
import Modal from "../Modal";
import "../Modal.css";
import { IRootState } from "./../../../redux";
type IFormModalProps = {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
};
const AddFormModal: VFC<IFormModalProps> = ({ setIsOpen }: IFormModalProps) => {
  const users = useSelector((state: IRootState) => state.users);
  const { loading, error, usersList } = users;
  const dispatch = useDispatch();
  const [todo, setTodo] = useState<ITodo>({
    id: Date.now(),
    title: "",
    description: "",
    status: "",
    member: "",
  });

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.title || todo.description || todo.status || todo.member) {
      dispatch(addTodo(todo));
      setTodo({
        id: 0,
        title: "",
        description: "",
        status: "",
      });
      setIsOpen((open) => !open);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | any>) => {
    const { value, name } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Modal heading="Add Todo" setIsOpen={setIsOpen}>
      {" "}
      <div className="modal__content">
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="title">Title</label>
          <input
            required
            name="title"
            onChange={handleChange}
            type="text"
            placeholder="Enter Todo Title"
          />

          <label htmlFor="description">Description</label>
          <input
            required
            name="description"
            onChange={handleChange}
            type="text"
            placeholder="Enter Todo Description"
          />
          <label htmlFor="status">Status</label>

          <select
            required
            name="status"
            onChange={handleChange}
            value={todo.status}
          >
            <option value="" disabled selected>
              Select Todo Status
            </option>

            <option value="Todo">To-Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <label htmlFor="status">Member</label>

          <select
            required
            name="member"
            onChange={handleChange}
            value={todo.member}
          >
            <option value="" disabled selected>
              Select a user
            </option>

            {loading ? (
              <option value="loading">Loading</option>
            ) : error ? (
              <option value="error">{error} </option>
            ) : (
              usersList.map((user: IUser) => (
                <option key={user.id} value={user.name}>
                  {user.name}
                </option>
              ))
            )}
          </select>

          <div className="modal___actions">
            <button className="modal__submitBtn">Submit</button>
            <button
              className="modal__cancelBtn"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddFormModal;
