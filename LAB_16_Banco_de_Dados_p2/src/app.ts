import express from 'express';
import { ProductController } from './controller/ProductController';

const router = express.Router();
const productController = new ProductController();

router.post('/produto/cadastrar', productController.cadastrarProduto.bind(productController));
router.put('/produto/atualizar', productController.atualizarProduto.bind(productController));

export default router;
