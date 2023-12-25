import React from 'react'
import TabButton from "./TabButton.jsx";
import {EXAMPLES} from "../data.js";
import { useState } from "react";
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

function Examples() {
    const [selectedTopic, setSelectedTopic]=useState();
    function displayData(data)
    {
       setSelectedTopic(data);
    }
  return (
    <>
    <Section  title="Examples" id="examples">
      <Tabs buttons={<>
        <TabButton displayButton={selectedTopic==='components'} onClick={()=>{displayData('components')}}>Components</TabButton>
          <TabButton displayButton={selectedTopic==='jsx'} onClick={()=>{displayData('jsx')}}>JSX</TabButton>
          <TabButton displayButton={selectedTopic==='props'} onClick={()=>{displayData('props')}}>Props</TabButton>
          <TabButton displayButton={selectedTopic==='state'} onClick={()=>{displayData('state')}}>States</TabButton>
      </>}>
          {!selectedTopic?<h2>Select above Menu</h2>: <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
        </div>} 
      </Tabs>
        </Section>
    </>
  )
}

export default Examples
