import { userModel } from "../model/users.js";
import express from 'express'



export const addUser = async (req, res) => {
    try {
        const data = req.body
        const addData = await userModel.create(data)
        console.log(data)
        res.send(addData)
    } catch (error) {
        console.log(error)
    }

}


export const getUsers = async (req, res) => {
    try {
        
       const getAllUsers = await userModel.find({})
       res.json({users: getAllUsers})
    } catch (error) {
        console.log(error)
    }

}