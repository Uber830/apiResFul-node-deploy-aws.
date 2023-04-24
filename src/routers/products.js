import {Router} from 'express'
import { getAllProducts, getIdProducts, postProducts, putProducts, patchProducts, deleteProducts } from '../controllers/products.js'

const productsRouter = Router()

productsRouter.get('/all', getAllProducts);

productsRouter.get('/:id', getIdProducts);

productsRouter.post('/create/:id', postProducts);

productsRouter.put('/update/:id', putProducts);

productsRouter.patch('/update/:id', patchProducts);

productsRouter.delete('/delete/:id', deleteProducts);

export default productsRouter