import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected"
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState,setProjectState]=useState({
    selectedProjectId:undefined,
    projects:[],
    tasks:[]
  });
  function handleStartAddProject()
  {
    setProjectState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:null,
      };
    });
  }
  function handleTasks(taskData)
  { const taskId=Math.random();
    const addTasks={...taskData,taskId}
    setProjectState(prevState=>{
      return{
        ...prevState,
        tasks:[...prevState.tasks,addTasks]
      }
    })
  }

  console.log(projectsState.tasks);
function handleAddProject(projectData)
{
  setProjectState(prevState=>{
   const setProjectS={...projectData,id:Math.random()}
    return{
     ...prevState,
     selectedProjectId:undefined,
     projects:[...prevState.projects,setProjectS]
    };
  });
}

function handleCancleProject()
{
  setProjectState(preveState=>{
    return{
      ...preveState,
      selectedProjectId:undefined,
    }
  })
}

function handleSlectedProject(id)
{
  setProjectState(prevState=>{
    return{
      ...prevState,
      selectedProjectId:id,
    };
  });
}

function handleCancleTask(id)
{
 setProjectState(prevState=>{
  return{
    ...prevState,
    tasks:prevState.tasks.filter((task)=>{task.taskId!==id}),
  }
 })
}

const selectedProject=projectsState.projects.find(project=>project.id===projectsState.selectedProjectId);

  let content=<SelectedProject addTask1={handleTasks} removeTask1={handleCancleTask} project={selectedProject} tasks={projectsState.tasks}/>;
    if(projectsState.selectedProjectId===null)
    {
      content=<NewProject onAdd={handleAddProject} onCancle={handleCancleProject}/>
    }
    else if(projectsState.selectedProjectId===undefined)
    {
      content=<NoProjectSelected onStartAddProject={handleStartAddProject}/>
    }
  return (
    <main className="h-screen my-8 flex gap-8">
    <Sidebar onStartAddProject={handleStartAddProject} allprojects={projectsState.projects} onSelectProject={handleSlectedProject} />
    {content}
    </main>
  );
}

export default App;
