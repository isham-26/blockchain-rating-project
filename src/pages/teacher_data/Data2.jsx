import React, { useState } from 'react'
import "./data.css"

const Data = ({state}) => {
  
  const [teacherid,setTeachertId]=useState();
  const [data,setData]=useState();
  const getRating = async(e)=>{
   
    try{
       const res = await state.contract.methods.getAverageRating(teacherid).call()
       setData(res)
    }catch(err){
       console.error(err);
    }
}

  return (
    <div className='input'>
       <div className="temp">
          <label>teacher Id</label>
          <input type="text" onChange={(e)=>setTeachertId(e.target.value)} placeholder='Enter teacher Id'/>
          <button className="getdata" onClick={getRating}>Getdata</button>
       </div>
       <div className="data">
            <p>{data}</p>
       </div>
    </div>
  )
}

export default Data