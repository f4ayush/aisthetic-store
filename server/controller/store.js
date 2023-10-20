import Store from '../model/store.js';

export const getAllStores = async (req, res) => {
    try {
        const stores = await Store.find();
        res.json(stores);
    } catch (error) {
      console.log(error)
        res.status(500).json({ error: 'Error fetching stores' });
    }
}

export const getStore = async (req, res) => {
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
}
