import express from "express";
import {connectDb} from "./helpers/db.js"

await connectDb("",( ) =>{
    console.log("db connected")

})

export const server = express('mongodb://localhost:27017')
const express =require ('express')
const app= express()

//routes
