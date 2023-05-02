import 'dotenv/config'
import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import appIndex from './routers/index.js';
import productsRouter from './routers/products.js';
import rolesRouter from './routers/roles.js';
import usersRouter from './routers/users.js';

const app = express()
const PORT = process.env['PORT']

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//router
//app.use('/api'); //definir ruta por default o si falla la api
app.use(appIndex);
app.use('/product', productsRouter);
app.use('/role', rolesRouter);
app.use('/user', usersRouter);

export {PORT, app}