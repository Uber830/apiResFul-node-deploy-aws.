import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import appIndex from './routers/index.js'
import productsRouter from './routers/products.js'

const app = express()
const PORT = process.env['PORT']

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//router
app.use(appIndex);
app.use(productsRouter);

export {PORT, app}