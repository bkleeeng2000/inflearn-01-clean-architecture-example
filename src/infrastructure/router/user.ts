import {Router} from 'express';
import {signUp} from '../../controller/user';


const router = Router();

router.get('/', async (req, res) => {
    res.send(await signUp());
});

export default router;
