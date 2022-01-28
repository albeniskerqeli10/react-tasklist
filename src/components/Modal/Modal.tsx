import { SetStateAction, FC, ReactNode } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
type IModalProps = {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  heading: string;
  children: ReactNode;
};
const Modal: FC<IModalProps> = ({
  setIsOpen,
  children,
  heading,
}: IModalProps) => {
  return ReactDOM.createPortal(
    <>
      <div className="modal__wrapper" onClick={() => setIsOpen(false)} />
      <div className="modal__center">
        <div className="modal__container">
          <div className="modal__header">
            <h5>{heading}</h5>
          </div>

          <div className="modal__content">{children}</div>
        </div>
      </div>
    </>,
    document.querySelector("#modalElement") as Element
  );
};

export default Modal;
