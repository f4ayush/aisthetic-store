const express = require('express');
const app = express();
const db = admin.firestore();

// Get all stores
app.get('/stores', async (req, res) => {
  try {
    const stores = await Store.find();
    res.json(stores);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching stores' });
  }
});

// Get a single store
app.get('/store/:storeId', async (req, res) => {
    const storeId = req.params.storeId;
    try {
        const store = await Store.findById(storeId);
        if (!store) {
          res.status(404).json({ error: 'Store not found' });
        } else {
          res.json(store);
        }
      } catch (error) {
        res.status(500).json({ error: 'Error fetching store' });
      }
});
