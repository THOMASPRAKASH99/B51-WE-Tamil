import React,{ useEffect } from 'react'
import {Outlet, useNavigate} from 'react-router-dom'
import { Button } from 'react-bootstrap'

function Nested() {
    let navigate = useNavigate()

    useEffect(()=>{
        navigate("class")
    },[])
  return <>
  <div className='nested-wrapper'>
 <ul><h1> Nested Routing </h1></ul>  <br/>
  <div className='list-wrapper'>
        <ul className='list'>
       <Button  onClick={()=>navigate("class")}> Class </Button> &nbsp;
       <Button onClick={()=>navigate("query")}> Query </Button> &nbsp;
       <Button onClick={()=>navigate("task")}> Task </Button> &nbsp;
        </ul>
  </div>
  
  <h3>
   <ul> <Outlet/> </ul>
    </h3>
 
  </div>
  </>
}

export default Nested