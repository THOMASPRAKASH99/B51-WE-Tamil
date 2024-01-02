import React ,{useEffect,useState,useRef}from 'react'
import Button from 'react-bootstrap/Button';

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
            <div><h2>useRef</h2></div> <br/>
              <UseRefCase2/>
            {/* <label>Name:</label> <input type="text" onChange={(e)=>setName(e.target.value)}/>
            {/* The Name is: {name} */}
            <br/>
            {/* Component Rendered {count.current} times */} 
          </div>
        </div>
     </div>
          
  </>
}


function UseRefCase2(){
  let inp1 = useRef(null)
  let inp2 = useRef(null)
  let inp3 = useRef(null)
  let inp4 = useRef(null)

  const reset = ()=>{
    inp1.current.value=""
    inp2.current.value=""
    inp3.current.value=""
    inp4.current.value=""
    inp1.current.focus()
  }
  useEffect(()=>{
    reset()
  },[])
  const handleSubmit =()=>{
    let value = inp1.current.value+inp2.current.value+inp3.current.value+inp4.current.value
    if(value.length===4)
    alert("The OTP is :"+value)
  else{
    alert("Invalid OTP")
    reset()
    }
  }
  return <>
    <span> <b>Enter the OTP :</b></span> <br/> <br/>
    <input ref = {inp1} onChange={()=>{inp2.current.focus()}}/> &nbsp;
    <input ref = {inp2} onChange={()=>{inp3.current.focus()}}/> &nbsp;
    <input ref = {inp3} onChange={()=>{inp4.current.focus()}}/> &nbsp;
    <input ref = {inp4}/> <br/> <br/>
    <Button variant='primary' onClick={handleSubmit}>Submit</Button>
    
  </>
}

export default UseRef