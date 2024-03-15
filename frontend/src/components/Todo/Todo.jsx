import React, { useEffect, useState } from 'react'
import './todo.scss'
import axios from 'axios';


function Todo({handleShowTodo}) {
    const dateToday = new Date().toISOString().split("T")[0];
    const [checkBox,setCheckBox] = useState(true);

    const [values,setValues] = useState({
        title:"",
        desc:"none",
        rush:"",
        deadline:"",
        status:"1",
        time:'AM'
    })


    const handleYes = () => {
        setCheckBox(true)
    }

    const handleNo = () => {
        setCheckBox(false)
    }

     function  handleSubmit (e) {
        e.preventDefault()
        if(values.rush==="yes"){
            setValues({...values,deadline:"0000000"});
        }

        if(window.confirm('Are you Sure u want to save?')){
            

            axios.post('https://jaa-api.vercel.app/create',{values})
                .then(result => {console.log(result)
                })
                .catch(err => console.log(err))   

             alert('Record Saved!')
             window.location.reload()
            handleShowTodo()
        }
    }
    const handleCancel = () =>{
        handleShowTodo()
    }

   useEffect(()=>{
        const time = document.querySelector('#time')
        const deadline = document.querySelector('#deadline')
        console.log(deadline)
        if(checkBox){
                time.disabled = true
                deadline.disabled = true
        }
        else{
                time.disabled = false
                deadline.disabled = false
                deadline.required = true
                time.required = true
        }
   },[checkBox])




   const handleOnChange = (e)=>{
    setValues({...values,[e.target.name]: e.target.value});
  }

  return (
    <div className='todo' id='todo'>
        
        <form className="todocontainer" onSubmit={handleSubmit}>
        <h1>
            To Do
        </h1>

        <div>
            <label htmlFor="title">Title</label>
            <input type="text" id='title' name='title' onChange={(e)=>handleOnChange(e)} required/>
        </div>

        <div>
            <label htmlFor="desc">Description</label>
            <textarea name="desc" id="desc" cols="30" rows="10" onChange={(e)=>handleOnChange(e)}></textarea>
        </div>
        <div>
            <label htmlFor="rush">RUSH?</label>
                <input type="radio" name="rush" id="rush" value={'yes'} onClick={handleYes} onChange={(e)=>handleOnChange(e)} required/>
                <label htmlFor="rush">Yes</label>

                <input type="radio" name="rush" value={'no'} onClick={handleNo} onChange={(e)=>handleOnChange(e)}/>
                <label htmlFor="rush">No</label>
                
        </div>

        <div>
            <label htmlFor="date">Deadline</label>
            <input type="date" id='deadline' name='deadline' min={dateToday} disabled onChange={(e)=>handleOnChange(e)}/>
        </div>
        <div>
            <label htmlFor="time">Time</label>
            <select name="time" id="time" onChange={(e)=>handleOnChange(e)}>
                <option value="AM" >AM</option>
                <option value="PM">PM</option>
            </select>
        </div>
        

        <div className='btns'>
            <div className='cancel button' onClick={handleCancel}>Cancel</div>
           <input type="submit" value="Save" className='submit button' />
        </div>


        </form>
    </div>
  )
}

export default Todo
