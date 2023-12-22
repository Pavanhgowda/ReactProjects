import React from 'react'

function CoreConcept({...mydata}) {
  return (
    <div>
     <li>
    <img src={mydata.image} alt={mydata.title}/>
    <h3>{mydata.title}</h3>
    <p>{mydata.description}</p>
  </li>
    </div>
  )
}

export default CoreConcept
