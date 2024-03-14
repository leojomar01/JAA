import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function Create() {
  const[color,setColor] = useState('1');
  const[size, setSize] = useState('#12');
  const[number,setNumber] = useState();
  const[comment,setComment] = useState("");
  const navigate = useNavigate();
  const fcolor = '1'


  const Submit =(e)=>{
    e.preventDefault();
    axios.post('jaa-3294-api.vercel.app',{color,size,number,comment})
    .then(result => {console.log(result)
      // navigate('/')
    })
    .catch(err => console.log(err))    

  }
  useEffect(()=>{
    axios.get(`jaa-3294-api.vercel.app/${fcolor}`)
    .then(result => {console.log(result.data)
    })
    .catch(err => console.log(err))
  },[])
  return (
    <div>
      <form action="" onSubmit={Submit}>
      <h1>Add to Stocks</h1>

      <label htmlFor="color">Color</label>
      <select name="color" id="color" onChange={(e)=>setColor(e.target.value)} >
        <option value="1">Red</option>
        <option value="2">Peach</option>
        <option value="3">Pink</option>
        <option value="4">Mint Green</option>
      </select>
      <label htmlFor="size">Size</label>
      <select name="size" id="size" onChange={(e)=>setSize(e.target.value)} >
        <option value="#6">#6</option>
        <option value="#8">#8</option>
        <option value="#10">#10</option>
        <option value="#12">#12</option>
        <option value="#14">#14</option>
        <option value="#16">#16</option>
        <option value="#18">#18</option>
        <option value="#20">#20</option>
        <option value="#22">#22</option>
        <option value="xs">XS</option>
        <option value="s">S</option>
        <option value="l">L</option>
        <option value="xl">XL</option>
        <option value="2xl">2XL</option>
        <option value="3xl">3XL</option>
        <option value="4xl">4XL</option>
        <option value="5xl">5XL</option>
      </select>
      <label htmlFor="number">Quantity</label>
      <input type="number" onChange={(e)=>setNumber(e.target.value)}/>
      <label htmlFor="comment">Comment</label>
      <textarea name="" id="" cols="30" rows="10" onChange={(e)=>setComment(e.target.value)}></textarea>
      <button type='submit'>ADD</button>
      </form>
      
    </div>
  )
}

export default Create
