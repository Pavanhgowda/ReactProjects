
import {CORE_CONCEPTS,EXAMPLES} from "./data.js";
import Header from "./components/Header.jsx"
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
function App() {
  const [selectedTopic, setSelectedTopic]=useState();
  function displayData(data)
  {
     setSelectedTopic(data);
  }
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
        {CORE_CONCEPTS.map(item=><CoreConcept key={item.title} {...item}/>)}
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
          <TabButton displayButton={selectedTopic==='components'} onSelect={()=>{displayData('components')}}>Components</TabButton>
          <TabButton displayButton={selectedTopic==='jsx'} onSelect={()=>{displayData('jsx')}}>JSX</TabButton>
          <TabButton displayButton={selectedTopic==='props'} onSelect={()=>{displayData('props')}}>Props</TabButton>
          <TabButton displayButton={selectedTopic==='state'}onSelect={()=>{displayData('state')}}>States</TabButton>
          </menu>
          {!selectedTopic?<h2>Select above Menu</h2>: <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
        </div>}
        </section>
      </main>
      </div>
  );
}
export default App;
