import './body.scss'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Body() {


    const [list,setList] = useState([]);


    useEffect(  ()=>{
         axios.get('http://localhost:3001/getTodos')
        .then(res => {
            console.log(res.data)
            setList(res.data)

        })
        .catch(err => console.log(err))
      },[])

  return (
    <div className='body' id='body'> 
{
    list.map((todo,i)=>(
        <div className="card" key={i}>
                <div className="title">Title: {todo.title}</div>
                <div className="desc">Description: {todo.desc}</div>
                <div className="deadline">Deadline: {
                    (todo.deadline==="0000000")?'ASAP':`${todo.deadline} ${todo.time}`
                    } 
                </div>
                <div className={`status`}>Status: 
                    <label className={`status${todo.status} status`}> 
                        {todo.status == 1 ? 'Pending....':todo.status == 2 ? 'Complete':todo.status == 3 ? 'Recieved': '' }
                    </label>


                </div>
                
            <div className='btn'> 
            
            {(todo.status==='3')?(<button>Delete</button>):null}
            <button>Update</button>

            </div>
        </div>
    )
    )
}
        
    </div>
  )
}

export default Body