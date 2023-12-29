import React,{useState} from 'react'
export const UserContext = React.createContext(null)

function UserContextComponent({children}) {
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
  return <UserContext.Provider value={{user,setUser}}>
    {children}
  </UserContext.Provider>
}

export default UserContextComponent