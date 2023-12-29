import React,{useEffect, useState, useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { UserContext } from '../utils/UserContextComponent';

function EditUser() {
 
  const param = useParams()
  
  
 let navi = useNavigate()

  let [fristName,setFname]= useState("")
  let [lastName,setLname]= useState("")
  let [email,setEmail]= useState("")
  let [mobile,setMobile]= useState("") 

  const userContext = useContext(UserContext)

  useEffect(()=>{
    if(param.id<userContext.user.length)
    {
      setFname(userContext.user[param.id].fristName)
      setLname(userContext.user[param.id].lastName)
      setEmail(userContext.user[param.id].email)
      setMobile(userContext.user[param.id].mobile)
    }
    else{
      alert("ERROR id not found"+param.id)
      navi('/dashboard')
    }
  },[])

  const handleEdit = ()=>{
    let newArray = [...userContext.user]
    newArray.splice(param.id,1,{
     fristName,
      lastName,
      email,
      mobile
   })
   userContext.setUser(newArray)
   navi('/dashboard')
  }

  return <>
  <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Add User</h1>
              </div>
              <Form>
                 <Form.Group className="mb-3">
                    <Form.Label>Frist Name</Form.Label>
                    <Form.Control type="text" placeholder="Frist Name" value={fristName} onChange={(e)=>{setFname(e.target.value)}} />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" value={lastName} onChange={(e)=>{setLname(e.target.value)}} />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="text" placeholder="Mobile" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} />
                  </Form.Group>

                  <Button variant="primary" onClick={()=>handleEdit()} >
                    Submit
                  </Button>
              </Form>
            </div>
          </div>
       </div>
  </>
}

export default EditUser