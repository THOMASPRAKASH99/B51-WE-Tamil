import { useState } from "react"
import React from "react"
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
import AddUser from "./components/AddUser"
import EditUser from "./components/EditUser"
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"

function App() {
  let [user,setUser]= useState([
    {
      firstName : "Thomas",
      lastName : "Prakash",
      email: "thomas@gmail.com",
      mobile: "9865432154"
    },
    {
      firstName : "John",
      lastName : "Raj",
      email: "johnraj@gmail.com",
      mobile: "9789645322"
    },
    {
      firstName : "Matthew",
      lastName : "Sharma",
      email: "matthewsharma@gmail.com",
      mobile: "6549873210"
    },
    {
      firstName : "Daniel",
      lastName : "Abishek",
      email: "danielabi@gmail.com",
      mobile: "9865432145"
    },
  ])
  return <>
      <BrowserRouter>
      <div id="wrapper">
      <Sidebar/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser} />} />
        <Route path="/add-user" element={<AddUser user={user} setUser={setUser}/>} />
        <Route path="/edit-user/:id" element={<EditUser user={user} setUser={setUser}/>} />
        <Route path="*" element={<Navigate to="/dashboard"/>} />
      </Routes>
      
      </div>
      </BrowserRouter>

    </>
}

export default App
