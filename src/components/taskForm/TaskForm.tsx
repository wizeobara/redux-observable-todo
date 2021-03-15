import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  addTodo,
  editTodo,
  switchModal
} from "../../store/todo/actions";
import {getTaskData} from "../../store/todo/reducers";
import styles from "./TaskForm.module.scss";
import TextField from "@material-ui/core/TextField";

type Inputs = {
  _id: string;
  taskTitle: string;
};

type PropTypes = {
  edit?: boolean;
};

const TaskForm: React.FC<PropTypes> = ({ edit }) => {
  const dispatch = useDispatch();
  const selectedTask = useSelector(getTaskData);
  const { register, handleSubmit, reset } = useForm();

  const handleCreate = (data: Inputs) => {
    const newTodo =  data.taskTitle;
    dispatch(addTodo(newTodo));
    reset();
  };

  const handleEdit = (data: Inputs) => {
    const sendData = { _id: selectedTask._id, title: data.taskTitle };
    dispatch(editTodo(sendData));
  };

  return (
    <div className={styles.root}>
      <form
        onSubmit={edit ? handleSubmit(handleEdit) : handleSubmit(handleCreate)}
        className={styles.form}
      >
        <TextField
          label={edit ? "EDIT TASK" : "ADD TASK"}
          defaultValue={edit ? selectedTask.title : ""}
          variant="outlined"
          inputRef={register}
          name="taskTitle"
          className={styles.text_field}
        />
        {edit ? (
          <div className={styles.button_wrapper}>
            <button type="submit" className={styles.submit_button}>
              Submit
            </button>
            <button
              type="button"
              onClick={() => dispatch(switchModal(false))}
              className={styles.cancel_button}
            >
              Cancel
            </button>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default TaskForm;