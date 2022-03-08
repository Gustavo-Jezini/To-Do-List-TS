import React from 'react'
import { ITask } from '../Interfaces';
import '../App.css';

interface Props {
  task?: ITask,
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className='task'>
      <div className='content'>
        <span>{task?.taskName}</span>
        <span>{task?.deadline}</span>
      </div>
      <button onClick={ () => {
        if (task)
        completeTask(task.taskName)
        }}>X</button>
    </div>
  )
}

export default TodoTask;
