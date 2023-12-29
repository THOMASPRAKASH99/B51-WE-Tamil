import { useState } from "react"
import React from "react"
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
import AddUser from "./components/AddUser"
import EditUser from "./components/EditUser"
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import UserContextComponent from "./utils/UserContextComponent"
import Nested from "./components/Nested/Nested"
import Query from "./components/Nested/Query"
import Class from "./components/Nested/class"
import Task from "./components/Nested/Task"
 
function App() {
  
  return <>
      <BrowserRouter>
      <div id="wrapper">
      <Sidebar/>
      <Routes>
        <Route path="/dashboard" element={<UserContextComponent><Dashboard/></UserContextComponent>}/>
        <Route path="/add-user" element={<UserContextComponent><AddUser/></UserContextComponent>} />
        <Route path="/edit-user/:id" element={<UserContextComponent><EditUser/></UserContextComponent>} />
        <Route path="/nested" element={<Nested/>}>
            <Route path="class" element={<Class/>}/>
            <Route path="query" element={<Query/>}/>
            <Route path="task" element={<Task/>}/>
        </Route>
        <Route path="*" element={<Navigate to="/dashboard"/>} />
      </Routes>
      
      </div>
      </BrowserRouter>

    </>
}

export default App
