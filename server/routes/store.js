import express from 'express';
import {getAllStores, getStore} from "../controller/store.js";
const router = express.Router();
// Get all stores
router.get('/stores', getAllStores);

// Get a single store
router.get('/store/:storeId', getStore);

export default router;