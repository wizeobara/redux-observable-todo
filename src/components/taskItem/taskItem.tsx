import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";
import EventNoteIcon from "@material-ui/icons/EventNote";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Modal from "@material-ui/core/Modal";
import TaskForm from "../taskForm/TaskForm";
import {
  deleteTodo,
  completeTodo,
  switchModal,
  selectTodo,
} from "../../store/todo/actions";
import { selectIsModalOpen } from "../../store/todo/reducers";
import styles from "./TaskItem.module.scss";

interface PropTypes {
  task: { _id: string; title: string; completed: boolean };
}

const TaskItem: React.FC<PropTypes> = ({ task }) => {
  const isModalOpen = useSelector(selectIsModalOpen);
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(selectTodo(task));
    dispatch(switchModal(true));
  };

  const handleClose = () => {
    dispatch(switchModal(false));
  };

  const completeTask = () => {
    const newComplete = { _id: task._id, completed: !task.completed };
    dispatch(completeTodo(newComplete));
  };

  const deleteTask = () => {
    const newDelete = task._id;
    dispatch(deleteTodo(newDelete));
  };

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <EventNoteIcon />
        <div className={styles.title_text}>{task.title}</div>
      </div>
      <div className={styles.right_item}>
        <Checkbox
          checked={task.completed}
          onClick={() => completeTask()}
          className={styles.checkbox}
        />
        <button onClick={handleOpen} className={styles.edit_button}>
          <EditIcon className={styles.icon} />
        </button>
        <button onClick={() => deleteTask()} className={styles.delete_button}>
          <DeleteForeverIcon className={styles.icon} />
        </button>
      </div>
      <Modal
        className={styles.modal}
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={styles.modal_content}>
          <h3 className={styles.modal_title}>EDIT TASK</h3>
          <TaskForm edit />
        </div>
      </Modal>
    </div>
  );
};

export default TaskItem;
