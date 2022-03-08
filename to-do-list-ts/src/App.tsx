import React, { ChangeEvent, FC, useState } from "react";
import './App.css'
import TodoTask from "./Compononets/TodoTask";
import { ITask } from "./Interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    };
  };

  const handleClick = (): void => {
    const newTask = { taskName: task, deadline: deadline }
    setTodoList([...todo, newTask])
    setDeadline(0);
    setTask("");
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todo.filter(task => task.taskName !== taskNameToDelete))
  }

  return (
    <div className="App">
      <div className="header">
        <div className="input-container">
          <input 
            onChange={ handleChange }
            value={task}
            name="task"
            type="text"
            placeholder="Taks"
          />
          <input
            onChange={ handleChange }
            name="days"
            value={deadline}
            type="number"
            placeholder="Deadline (in Days)"
          />
        </div>
        <button onClick={ handleClick } type="submit">Add Task</button>
      </div>
      <div className="todoList">
        {todo.map((task: ITask, index: number) => {
          return <TodoTask key={index} completeTask={completeTask} task={task} />
        })}
      </div>
    </div>
  );
}

export default App;
