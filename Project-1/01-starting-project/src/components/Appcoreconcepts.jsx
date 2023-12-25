import React from 'react';
import CoreConcept from "./CoreConcept.jsx";
import {CORE_CONCEPTS} from "../data.js";
function Appcoreconcepts() {
  return (
    <>
     <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
        {CORE_CONCEPTS.map(item=><CoreConcept key={item.title} {...item}/>)}
        </ul>
        </section>
    </>
  )
}

export default Appcoreconcepts
