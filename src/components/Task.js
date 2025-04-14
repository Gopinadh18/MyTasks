import './Task.css' 
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Filter from './Filter';

//import Filter from './Filter';

const Task=()=>{
    const [task,setTask]=useState("");
    const [tag,setTag]=useState("Health");
    const [taskList,setTaskList]=useState([]);
const onclickAddTask=(event)=>{
event.preventDefault()
const newtask = {
    id:uuidv4(),
    task,
    tag
}
setTaskList((prevTasks =>[...prevTasks,newtask]))
console.log("task:",task)
console.log("tag:",tag)
}
console.log(taskList)
const onEnterInputValue =(event) =>{
    setTask(event.target.value)
}
const onChangetag=(event) =>{
    setTag(event.target.value)
}
    return(
        <div className='task-container'>
        <div className='inner-contanier'>
            <h1 className='task-heading'>Create a task!</h1>
            <form className='form-container' onSubmit={onclickAddTask}>
                <label className='task-label' htmlFor='task'>Task</label>
                <input type='text' placeholder='Enter the task here' className='task-input' id="task" value = {task} onChange={onEnterInputValue}/>
                <label className='tags-label' htmlFor='tags' >Tags</label>
                <select id='tags' onChange={onChangetag} value={tag}>
                <option value="Health">Health</option>
                <option value="Education">Education</option>
                <option value="Sports">Sports</option>
                <option value ="Travel">Travel</option>
                <option value = "Others">Others</option>
                <option value = "Entertainment">Entertainment</option>
                </select>
                <button className='button' type="submit">Add task</button>
            </form>
            </div>
            <div className='filter-container'>
                <Filter newTaskList={taskList}/>
            </div>
        </div>
    )

}

export default Task