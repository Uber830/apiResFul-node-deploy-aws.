import {Router} from 'express';
import {getAllRoles, postRoles, putRoles, deleteRoles} from '../controllers/roles.js'

const rolesRouter = Router();

rolesRouter.get('/all', getAllRoles);

rolesRouter.post('/create', postRoles);

rolesRouter.put('/update/:id', putRoles);

rolesRouter.delete('/delete/:id', deleteRoles);

export default rolesRouter