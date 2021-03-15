import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadTodos} from "../../store/todo/actions";
import {getUser} from "../../store/todo/reducers"
import TaskItem from "../taskItem/taskItem";
import styles from "./TaskList.module.scss";

const TaskList: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(getUser);
  

  useEffect(() => {
    dispatch(loadTodos());
  }, []);
  
  return (
    
    <div className={styles.root}>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task}/>
      ))}
    </div>
  );
};

export default TaskList;
