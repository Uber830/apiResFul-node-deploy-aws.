import {Router} from 'express'
import { getAllUsers, getIdUser, postUser, putUser, patchUser, deleteUser } from '../controllers/users.js'

const usersRouter = Router()

usersRouter.get('/all', getAllUsers);

usersRouter.get('/:id', getIdUser);

usersRouter.post('/create/:id', postUser);

usersRouter.put('/update/:id', putUser);

usersRouter.patch('/update/:id', patchUser);

usersRouter.delete('/delete/:id', deleteUser);

export default usersRouter