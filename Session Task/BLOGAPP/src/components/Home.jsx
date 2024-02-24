import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BlogCard from './BlogCard'
import {API_URL} from '../App'

function Home() {

  let [blogs,setBlogs] = useState([])

  const getBlogs = async()=>{
  try {
    let res = await axios.get(API_URL)
    let filteredBlogs = res.data.filter((e)=>e.status)
    setBlogs(filteredBlogs)
  }
  catch(error) {
    console.log(error)
  }
}

  
  useEffect(()=>{
    getBlogs()
  },[]) 
 
 return <>
    <div className='container-fluid home-wrapper'>
      {
        blogs.map((e)=>{
          return <BlogCard title={e.title} image={e.image} description={e.description} key={e.id}/>
        })
      }

    </div>
  </>
}

export default Home