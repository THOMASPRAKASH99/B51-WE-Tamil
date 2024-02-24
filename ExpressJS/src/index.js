// const ex = require('express')
import express from 'express'
import AppRoutes from './routes/index.js'

const app = express()
const PORT = process.env.PORT || 2000
app.use(express.json())
app.use(AppRoutes)
app.listen(PORT,()=>console.log(`Request is run sucsses in ${PORT}`))