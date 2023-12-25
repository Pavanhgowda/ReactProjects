import { useState } from "react"

function Player({initialName,playerSymbol}) {
    const [changeName,setChangeName]=useState(initialName);
 const [isEditing,setIsEditing]=useState(false);
 console.log(changeName);

 function handleEditClick()
 {
    setIsEditing((editing=>!editing));
    setChangeName(changeName);
 }

function handleChange(event)
{
    setChangeName(event.target.value);
}

 let player=<span className="player-name">{changeName}</span>;
 if(isEditing)
 {
    player=<input type="text" required value={changeName} onChange={handleChange}/>;
 }
 
  return (
    <>
    <li>
      <span className="Player">
        {player}
      <button onClick={handleEditClick}>{isEditing?"Save":"Edit"}</button>
      </span>
      </li>
    </>
  )
}

export default Player
