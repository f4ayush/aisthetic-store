import 'dotenv/config'
const PORT = process.env.PORT || 5000;
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from "./routes/index.js";
import mongoose from 'mongoose'

const app = express();
app.use(bodyParser.json());
app.use(cors())
app.use('/', routes);

const CONNECTION_URL = process.env.CONNECTION_URL
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((e) => console.log(e))

