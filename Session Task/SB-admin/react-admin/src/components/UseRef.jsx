import React ,{useEffect,useState,useRef}from 'react'

function UseRef() {
    let [name,setName] = useState("")
    
    let count = useRef(0)

    useEffect(()=>{
        count.current += 1
    })

  return <>
  <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <div><h2>useRef</h2></div>

            <label>Name:</label> <input type="text" onChange={(e)=>setName(e.target.value)}/>
            {/* The Name is: {name} */}
            <br/>
            Component Rendered {count.current} times
          </div>
        </div>
     </div>
          
  </>
}

export default UseRef