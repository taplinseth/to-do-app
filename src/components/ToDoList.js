import React from 'react'


const ToDoList = (props) => {

  return (
    <li className="toDoCard">

      <h2>
        {props.title}
      </h2>
      <button onClick={() => {props.clickToRemove(props.index)}}>remove</button>
  </li>

  )
}

export default ToDoList