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
// Connect to MongoDB (replace 'mongodb://localhost/yourdb' with your MongoDB URI)
const CONNECTION_URL = "mongodb+srv://ayush:ayush@cluster0.mbopfgz.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((e) => console.log(e))

