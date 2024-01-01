import React from 'react';
import Input from './Input';
import Model from './Model';
import {useRef } from 'react';
function NewProject({onAdd,onCancle}) {
  const title=useRef();
  const description=useRef();
  const dueDate=useRef();
  const model=useRef();

  function handleSaveButton()
  {
    const enteredTitle=title.current.value;
    const enteredDescription=description.current.value;
    const enteredDueDate=dueDate.current.value;
    if(enteredTitle.trim()===''||enteredDescription.trim()===''||enteredDueDate.trim()==='')
    {
      model.current.open();
      return;
    }
    onAdd({title:enteredTitle,description:enteredDescription,dueDate:enteredDueDate});
  }

  function handleCancleButton()
  {
    onCancle();
  }

  return (
    <>
    <Model ref={model} buttonCapiton='Close'>
    <h2 className='text-xl font-bold text-stone-500 mt-4 my-4'>Invalid Input</h2>
    <p className='text-stone-800 mb-4'>Oops... looks like you forgot to enter a value.</p>
    </Model>
    <div className='w-[35rem] mt-16'>
    <menu className='flex items-center justify-end gap-4 my-4'>
    <li><button className='text-stone-800 hover:text-stone-950' onClick={handleCancleButton}>Cancel</button></li>
    <li><button className='px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md' onClick={handleSaveButton}>Save</button></li>
    </menu>
    <div>
    <Input type="text" label='Title' ref={title} />
    <Input label='Description' ref={description} textarea/>
    <Input type="date" label="Due Date" ref={dueDate} Date/>
    </div>
    </div>
    </>
    
  )
}

export default NewProject
