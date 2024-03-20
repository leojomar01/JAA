import './body.scss'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Body() {

    const dateToday = new Date().toISOString().split("T")[0];
    const [list,setList] = useState([]);

    const handleEdit =(e)=>{
        const completebtn = document.querySelectorAll('.completebtn')
        const editbtn = document.querySelectorAll('.editbtn')
        const cancelbtn = document.querySelectorAll('.cancelbtn')
        const recievedbtn = document.querySelectorAll('.recievedbtn')

        editbtn[e].hidden = true
        cancelbtn[e].hidden = false
        recievedbtn[e].hidden = false
        completebtn[e].hidden = false
    }
    const handleCancel =(e)=>{
        const completebtn = document.querySelectorAll('.completebtn')
        const recievedbtn = document.querySelectorAll('.recievedbtn')

        const editbtn = document.querySelectorAll('.editbtn')
        const cancelbtn = document.querySelectorAll('.cancelbtn')

        recievedbtn[e].hidden = true
        completebtn[e].hidden = true
        editbtn[e].hidden = false
        cancelbtn[e].hidden = true
    }



    async function getTosos(){
        await axios.get('https://jaa-api.vercel.app/getTodos')
        .then(res => {
            console.log(res.data)
            setList(res.data)
        })
        .catch(err => console.log(err))
    }
    useEffect(  ()=>{
        getTosos()
      },[])

      const handleSubmit = (status,id)=>{
        if(window.confirm('Are you Sure u want to save?')){
            axios.put('https://jaa-api.vercel.app/updateRecord/'+id,{status})
           setTimeout(function(){
                alert('record saved!')
                window.location.reload()
            },800);
        }
      }

      const handleDelete = (id)=>{
        if(window.confirm('Are you Sure u to delete this record?')){
            axios.put('https://jaa-api.vercel.app/deleteRecord/'+id)
             setTimeout(function(){
                alert('Record Deleted!')
                window.location.reload()
            },800);
        }
      }

  return (
    <div className='body' id='body'> 
{
    list.length !== 0?(
        list.map((todo,i)=>(
            <form action="" key={i} className={(dateToday>=todo.deadline||todo.deadline==="0000000")? 'warning card':'card'}>
                <input type="hidden" defaultValue={todo._id} />
    
                <div className='title'>
                    {/* <label htmlFor="title">Title: </label> */}
                    <input type="text" name="title" id="title" defaultValue={todo.title} readOnly/>
                </div>
                
    
                <div>
                    <label htmlFor="desc">Description: </label>
                    <textarea name="desc" id="" cols="30" rows="5" defaultValue={todo.desc} readOnly></textarea>   
                </div>
    
                <div>
                    <label htmlFor="date">Deadline: </label>
                    <input type="text" name="date" id="date" defaultValue={(todo.deadline==="0000000")?'ASAP':`${todo.deadline} ${todo.time}`} readOnly/>
                </div>
                
                <div>
                    <label htmlFor="status">Status: </label>
                    <input type="text" name="status" id="status" className={`status${todo.status}`} defaultValue={
                        (todo.status==='1')?'Pending. . .':(todo.status==='2')?'Done':(todo.status==='3')?'Received':null
                        } readOnly/>
                </div>
    
                
    
                <div>   
                    {(todo.status!=='3')?(<input type="button"  className='editbtn' value="Edit" onClick={()=>handleEdit(i)}/>):null}
                    {(todo.status==='1'|| todo.status==="2")?(<input type="button" hidden={true} className='cancelbtn' value="Cancel"onClick={()=>handleCancel(i)} />):null}
                    {(todo.status==='3')?(<input type="button" value="Delete" className='delete' onClick={()=>{handleDelete(todo._id)}} />):null}
                    {(todo.status==='1'||todo.status==='2')?(<input type="button" value="Done" className='completebtn' hidden={true} onClick={()=>{handleSubmit(2,todo._id)}}/> ):null}
                    {(todo.status==='1'|| todo.status==="2")?(<input type="button" value="Recieved" className='recievedbtn' hidden={true} onClick={()=>{handleSubmit(3,todo._id)}}/>):null}
                </div>
    
                
                    
                    
                
                
                
            </form>
        )
        )
    ): (<p>No Records found</p>)
}
        
    </div>
  )
}

export default Body
