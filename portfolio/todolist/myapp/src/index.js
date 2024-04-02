import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const AddTask = ({addTask}) =>{
  const[value,updateValue] =useState("");
};
return(
  <form>
    <input
    type="text"
    value={value}
    placeholder="Enter your task todo"
    onchange={e => updateValue(e.target.value)}
    />
  </form>
);
const ToDoList = () => {
  const [tasks,updateTask] = useState([
  {
    text:"Wake up",
    iscompleted:false
  },
  {
    text:"Fresh up",
    iscompleted:false
  },
  {
    text:"Boots up",
    iscompleted:false
  }
]);
const toggleTask = index =>{
  const newTask = [...tasks];
  if(newTask[index].isCompleted)
  {
    newTask[index].isCompleted = false;
  }
  else{
    newTaskask[index].isCompleted = true; 
  }
   updateTask(newTask);
  }
  const removeTask = index =>{
    const newTask = [...tasks];
    newTask.splice(index,1);
    updateTask(newTask);
  }
  return(
   <div className="list-of-tasks-todo">
     {tasks.map((task,index) =>(
       <div className="task-status">
        <span onClick={() => toggleTask(index)} className={task.iscompleted ? "task-name completed-task" : "task-name"}>
         {index}
         {task.test}
        </span>
        <button onClick={() => removeTask(index)}><i class ="materials-icon"></i></button>
      </div>
    ))}
   </div>
  );
}
ReactDOM.render(<ToDoList />,document.getElementById('root'));
