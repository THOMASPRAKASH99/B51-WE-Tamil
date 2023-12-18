import React from 'react'
import { useParams } from 'react-router-dom'
function EditUser({user,setUser}) {
  const param = useParams()
  console.log(param,user[param.id])
  return <>
  <div>EditUser</div>
  </>
}

export default EditUser