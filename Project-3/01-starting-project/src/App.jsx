import { useState } from 'react'
import Calculatorinputs from './components/Calculatorinputs'
import Displaytable from './components/Displaytable'
import Header from './components/Header'
function App() {
  const [userInput,setUserInput]=useState({
    initialInvestment:1000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
 })

 function handleChange(inputIdentifier,newValue)
 {
    setUserInput((prevUserInput)=>{
         return{
              ...prevUserInput,
              [inputIdentifier]:Number(newValue)
         };
    })
 }
  return (
    <>
    <Header/>
    <Calculatorinputs uservalue={userInput} setInputValues={handleChange}/>
    <Displaytable data={userInput}/>
    </>
  )
}

export default App
