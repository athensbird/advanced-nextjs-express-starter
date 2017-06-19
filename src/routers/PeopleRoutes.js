import PeopleController from '../controllers/PeopleController';
import express from 'express';


const router = express.Router();
const ROUTE_ID = '/list/:id';

router.get('/list', PeopleController.list);
router.get(ROUTE_ID, PeopleController.find);
router.put(ROUTE_ID, PeopleController.update);
router.delete(ROUTE_ID, PeopleController.delete);
router.post('/list', PeopleController.create);

export default router;
