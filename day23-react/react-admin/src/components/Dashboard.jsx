import React from 'react'
import Report from './Report'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Dashboard({user,setUser}) {
    console.log(user,setUser);  
   let data = [
        {
            isProgress :false,
            title : " Earnings (Monthly)",
            value : "$40,000",
            icon : "fas fa-calendar",
            color : "primary"
        },
        {
            isProgress :false,
            title : "Earnings (Annual)",
            value : "$215,000",
            icon : "fa-dollar-sign",
            color : "success"
        },
        {
            isProgress :true,
            title : "Tasks",
            value : "50",
            icon : "fa-clipboard-list",
            color : "info"
        },
        {
            isProgress :false,
            title : "Pending Requests",
            value : "18",
            icon : "fa-comments",
            color : "warning"
        },
    ]

    const nav = useNavigate()

    const toDelete = (i)=>{
        let newArray = [...user]
        newArray.splice(i,1)
        setUser(newArray)
    }
  return <>
  <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              </div>
            <div className="row">
                {
                    data.map((e,i)=>{
                        return <Report key={i}
                        isProgress={e.isProgress}
                        title={e.title}
                        value={e.value}
                        icon={e.icon}
                        color={e.color}
                        />
                    })
                }
                </div>
<div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h4 className="h3 mb-0 text-gray-800">User List</h4>
</div>
                <div className='row'>
                <div className='container-fluid'>
                <Table striped bordered hover>
        <thead>
            <tr>
            <th>S.No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Action</th>
            </tr>
        </thead>
    <tbody>
    {
        user.map((e,i)=>{
            return <tr key={i}>
                <td>{i+1}</td>
                <td>{e.firstName}</td>
                <td>{e.lastName}</td>
                <td>{e.email}</td>
                <td>{e.mobile}</td>
                <td>
                    <Button variant='dark' onClick={()=>nav(`/edit-user/${i}`)}>Edit</Button>
                    &nbsp;
                    <Button variant='danger' onClick={()=>toDelete(i)}>Delete</Button>
                </td>
            </tr>
        })
    }
    </tbody>
    </Table>
                </div>
                </div>
            </div>
          </div>
        </div>
  </>
}

export default Dashboard