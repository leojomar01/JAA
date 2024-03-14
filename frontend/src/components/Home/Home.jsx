import React, { useState } from 'react'
import './home.scss'
import Body from '../Body/Body'
import Todo from '../Todo/Todo'


function Home() {
  const [showTodo, setShowTodo] = useState(false);

  const dateToday = new Date().toDateString()

  const handleShowTodo =() =>{
    setShowTodo(!showTodo)
  }
  return (
    <div id='home'>
      <nav>
        <div className='create' onClick={handleShowTodo}>
          Create New
        </div>

        <div className="dateToday">{`Date Today: ${dateToday}  `}</div>
      </nav>

      //<Body/>
      {showTodo?<Todo handleShowTodo={handleShowTodo}/>:null}


    </div>
  )
}

export default Home
