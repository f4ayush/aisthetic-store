// import jwt from 'jsonwebtoken';

import admin from "firebase-admin";
import serviceAccount from "../firebase-admin-sdk.js";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://aisthetic-34adc.firebaseio.com",
});

const checkAuth = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    admin.auth().verifyIdToken(token).then(decodedIdToken => {
      req.user = decodedIdToken.name;
      next();
    })
  } catch (error) {
    console.log(error)
    return res.status(401).json({ error: 'Unauthorized' });
  }
};

export default checkAuth;
