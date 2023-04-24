import {Router} from 'express';
import {getAllRoles, postRoles, putRoles, deleteRoles} from '../controllers/roles.js'

const rolesRouter = Router();

rolesRouter.get('/all', getAllRoles);

rolesRouter.post('/create/role/:id', postRoles);

rolesRouter.put('/update/role/:id', putRoles);

rolesRouter.delete('/delete/role/:id', deleteRoles);

export default rolesRouter