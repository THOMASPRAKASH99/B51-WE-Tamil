import mongodb, { MongoClient } from 'mongodb'
import userModel from '../model/user.js'
import dotenv from 'dotenv'
dotenv.config()
const client = new MongoClient(process.env.DB_URL)

const getAllUsers = async(req,res)=>{
  try {
    
        let users = await userModel.find()
        res.status(200).send({
            message:"Data fetch successfully",
            users
        })
  } catch (error) {
    res.status(500).send({
        message:error.message || "Internal server error"
        
    })
  }
}

const getUsersById = async(req,res)=>{
    try {
        
        let user = await userModel.findOne({_id:req.params.id})
        res.status(200).send({
            message:"Data fetch successfully",
            user
        })

    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal server error"
        })
    }
    finally{
        client.close()
    }
}


const createUser = async(req,res)=>{
    try {
        
        let user = await userModel.findOne({email:req.body.email})
       if(!user)
       {
        await userModel.create(req.body)
        res.status(201).send({
            message:"User created successfully"
        })
       }
       else
       {
        res.status(400).send({
            message:`user with ${res.body.email}already exists`
        })
       }

    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal server error"
        })
    }
    finally{
        client.close()
    }
}

const editUserById = async(req,res)=>{
    try {
        
        let user = await userModel.findOne({_id:req.params.id})
       if (user)
       {
        user.name = req.body.name
        user.email = req.body.email
        user.password = req.body.password
        user.status = req.body.status
        user.role = req.body.role

        await user.save()

        res.status(200).send({
            message: "User Edited successfully"
        })
       }
        else{
            res.status(400).send({
              message:"User Not found"  
            })
        }

    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal server error"
        })
    }
    
}

const deleteUsersById = async(req,res)=>{
    try {
        
        let user = await userModel.findOne({_id:req.params.id})
       console.log(user)
       if(user)
       {
        let data = await userModel.deleteOne({_id:req.params.id})
        res.status(200).send({
            message:"User Deleted Successfully",
            data
        })
       }
       else 
       {
        res.status(400).send({
            message:"User Not found"
        })
       }
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal server error"
        })
    }
   
}

export default {
    getAllUsers,
    getUsersById,
    createUser,
    editUserById,
    deleteUsersById
}