import {Router} from 'express';
import {signUp} from '../../controller/user';


const router = Router();

router.get('/', async (req, res) => {
    res.send(signUp());
});

export default router;
