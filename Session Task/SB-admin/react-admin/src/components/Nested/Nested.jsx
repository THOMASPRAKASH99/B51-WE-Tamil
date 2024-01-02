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
  <h3>Nested Routing </h3> <br/>
  <div className='list-wrapper'>
        <ul className='list'>
       <Button  onClick={()=>navigate("class")}> Class </Button> &nbsp;
       <Button onClick={()=>navigate("query")}> Query </Button> &nbsp;
       <Button onClick={()=>navigate("task")}> Task </Button> &nbsp;
        </ul>
  </div>
  
  <h2>
    <Outlet/>
    </h2>
 
  </div>
  </>
}

export default Nested