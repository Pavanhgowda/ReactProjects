import React from 'react'
import configure  from "../assets/config.png";
import components from "../assets/components.png";
import statemanage from "../assets/state-mgmt.png";
import reactlog   from "../assets/react-core-concepts.png";
import "./Header.css"
export default function Header() {
const mylist=['Powerful','Core','Dynamic'];
const myListImages=[configure,components,statemanage,reactlog];
function randoms(max)
{
  return Math.floor(Math.random()*(max+1));
}
  return (
    <div>
      <header>
      <img src={myListImages[randoms(3)]} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {mylist[randoms(2)]} React concepts you will need for almost any app you are
          going to build!
        </p>
        </header>
    </div>
  )
}

