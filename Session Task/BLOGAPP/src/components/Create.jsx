import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BlogCard from './BlogCard';
import axios from 'axios';
import { API_URL } from '../App';
import { useNavigate } from 'react-router-dom';

function Create() {

    let [title,setTitle] = useState("")
    let [description,setDes] = useState("")
    let [image,setImage] = useState("")
    let navigate = useNavigate("")

    const handleSubmit= async()=>{
      try {
        let res = await axios.post(API_URL,{
          title,
          description,
          image,
          status:false
        })
        if(res.status===201)
        {
          alert('You have create your blog successfully')
          navigate('/dashboard')
        }
      } catch (error) {
        console.log(error)
      }
        
    }

  return <div className='create-wrapper container-fluid'>
    <div className='form-wrapper'>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Title:</Form.Label>
        <Form.Control type="email" placeholder="Title" onChange={(e)=>setTitle(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Image Url:</Form.Label>
        <Form.Control type="password" placeholder="Image url" onChange={(e)=>setImage(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="textarea" placeholder="Descripton" onChange={(e)=>setDes(e.target.value)}/>
      </Form.Group>
     
      <Button variant="primary" onClick={()=>handleSubmit()}>
        Submit
      </Button>
        </Form> 
        </div>
        <br/> 
        
        <div className='preview-wrapper'>
            <BlogCard title={title} image={image} description={description}/> 
        </div>
  </div>
}

export default Create