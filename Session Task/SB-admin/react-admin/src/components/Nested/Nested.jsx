import React,{ useEffect } from 'react'
import {Outlet, useNavigate} from 'react-router-dom'

function Nested() {
    let navigate = useNavigate()

    useEffect(()=>{
        navigate("class")
    },[])
  return <>
  <div className='nested-wrapper'>
  <h3>Nested Routing </h3>
  <div className='list-wrapper'>
        <ul className='list'>
        <li onClick={()=>navigate("class")}>Class</li>
        <li onClick={()=>navigate("query")}>Query</li>
        <li onClick={()=>navigate("task")}>Task</li>
        </ul>
  </div>
  
  <h2>
    <Outlet/>
    </h2>
 
  </div>
  </>
}

export default Nested