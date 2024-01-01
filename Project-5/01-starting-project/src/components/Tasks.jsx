import NewTask from "./NewTask";
export default function Tasks({addTask2,tasks,removeTask2})
{
    return(
    <section>
    <h2 className="text-stone-700 text-2xl font-bold mb-4">Tasks</h2>
   <NewTask addTask3={addTask2}/>
    {tasks.length<=0&&<p className="text-stone-800 my-4">This project does not have any tasks yet.</p>}
    {tasks.length>0 && <ul>{tasks.map(task=><li key={task.id} className="flex justify-between my-4"><span>{task.text}</span>
    <button className="text-stone-700 hover:text-red-500" onClick={()=>{removeTask2(task.taskId)}}>Clear</button></li>)}</ul>}
    </section>);
} 