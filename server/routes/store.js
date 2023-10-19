import express from 'express';
import {getAllStores, getStore} from "../controller/store.js";
const router = express.Router();
// Get all stores
router.get('/allStores', getAllStores);

// Get a single store
router.get('/:storeId', getStore);

export default router;