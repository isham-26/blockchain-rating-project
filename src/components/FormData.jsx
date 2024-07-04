import React, { useState } from 'react'
import "./form.css"
import { Link } from 'react-router-dom'


const FormData = ({state,connect}) => {
  const [id,setId]=useState()
  const [rating,setRating]=useState()
  const [comment,setComment]=useState()

const createRating = async(e)=>{
    try{
       const res=await state.contract.methods.addReview(id,rating,comment).send({from:state.account})
       console.log(res)
       alert("rating added to given teachet id")
    }catch(err){
       console.error(err);
    }
}

  return (
    <div className="container">
        <div className="form">
          <label>teacher Id</label>
          <input type="text" onChange={(e)=>setId(e.target.value)} placeholder='Enter teacher Id'/>
          <label>rating</label>
          <input type="text" onChange={(e)=>setRating(e.target.value)} placeholder='Enter rating'/>
          <label>comment</label>
          <textarea type="text" onChange={(e)=>setComment(e.target.value)} placeholder='Enter comment'/>
          <button className="submit" onClick={createRating}>submit</button>
        </div>
        <button className="wallet" onClick={connect}>connect wallet</button>
        <Link to="/Data"><button className="showData">Show data</button></Link>
    </div>
  )
}
export default FormData