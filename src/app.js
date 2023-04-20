import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import appIndex from './routers/index.js'

const app = express()
const PORT = process.env['PORT']

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use(appIndex)

export {PORT, app}