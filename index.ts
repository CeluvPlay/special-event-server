// external imports
import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
//
import routes from './routes'

// Middleware
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('dev'))
app.use(cookieParser())

// Routes
app.use('/api', routes.auth_router)

// Database
import './config/database'

// server listenning
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log('Server is running on port', PORT)
})

module.exports = app