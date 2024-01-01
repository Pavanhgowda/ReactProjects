import { useState } from "react"

export default function NewTask({addTask3})
{
    const [task,setTask]=useState('');
    function addTasksData(event)
    {
       setTask(event.target.value);
    }
    function handlesumbit()
    {
        addTask3({text:task});
        setTask('');
    }

    return <div className="flex items-center gap-4;">
        <input className="w-64 px-2 py-1 rounded-sm border-stone-950 bg-stone-200" type="text" value={task} onChange={addTasksData}/>
        <button className="text-stone-700 hover:text-stone-950 mx-4 " onClick={handlesumbit}>Add Task</button>
    </div>
}