import { RequestHandler, Router } from 'express';
import { deleteUsuario, getUsuario, getUsuarios, postUsuario, putUsuario } from '../controllers/usuarios';

const router = Router();

// router.get('/', getUsuarios);
// router.get('/:id', getUsuario);
// router.post('/', postUsuario);
// router.put('/:id', putUsuario);
// router.delete('/:id', deleteUsuario);

router.get('/', getUsuarios as RequestHandler);
router.get('/:id', getUsuario as RequestHandler);
router.post('/', postUsuario as RequestHandler);
router.put('/:id', putUsuario as RequestHandler);
router.delete('/:id', deleteUsuario as RequestHandler);

export default router;