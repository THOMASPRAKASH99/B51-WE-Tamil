const user =[{
    id: 1,
    name: "Thomas Prakash",
    email:"thomasprakash@gmail.com",
    username:"Tomson",
    password:"tom@1234",
    status:true
}]

const findIndex = (array,id)=>{
    for(let i =0;i<array.length;i++)
    {
        if(array[i].id==id)
        return i 
    }
    return -1
}

const getAllusers = (req,res)=>{
    try {
        res.status(200).send({
            message:"User data fetched successfully",
            user
        })
    } catch (error) {
        res.status(500).send({
            massage:"error, your server loading failed"
        })
    }
}

const getUserById = (req,res)=>{
    try {
        let {id} = req.params
        let index = findIndex(user,id)
        if(index!==-1)
        {
            res.status(200).send({
                message:"User data fetched successfully",
                user:user[index]
            })
        }
        else {
            res.status(400).send({
                message:"Invalid User Id"
            })
        }
    } catch (error) {
        res.status(500).send({
            message:"Internal server error"
        })
    }
}

const addUser = (req,res)=>{
    try {
        let id = user[user.length-1].id + 1
        let data = req.body
        data.id = id

        user.push(data)

        res.status(201).send({
            message:"User Created Successfully"
        })
    } catch (error) {
        res.status(500).send({
            message:"Internal server error"
        })
    }
}

const editUserById = (req,res)=>{
    try {
        let {id} = req.params
        let index = findIndex(user,id)
        if(index!==-1)
        {
            req.body.id = Number(id)
            user.splice(index,1,req.body)
            res.status(200).send({
                message:"User data fetched successfully",
                user:user[index]
            })
        }
        else {
            res.status(400).send({
                message:"Invalid User Id"
            })
        }
    } catch (error) {
        res.status(500).send({
            message:"Internal server error"
        })
    }
}

const deleteUserById = (req,res)=>{
    try {
        let {id} = req.params
        let index = findIndex(user,id)
        if(index!==-1)
        {
        
            user.splice(index,1)
            res.status(200).send({
                message:"User data fetched successfully"
            })
        }
        else {
            res.status(400).send({
                message:"Invalid User Id"
            })
        }
    } catch (error) {
        res.status(500).send({
            message:"Internal server error"
        })
    }
}


export default {
    getAllusers,
    getUserById,
    addUser,
    editUserById,
    deleteUserById
}