import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import Connection from './database/db.js';
import DefaultData from './default.js';
import route from './routes/route.js';

const app = express();

dotenv.config();

app.use(cors());
app.use('/', route);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"));
}

const port= process.env.port ||8000;

const username =process.env.DB_USERNAME;
const password =process.env.DB_PASSWORD;


const URL = process.env.MONGODB_URI || `mongodb+srv://${username}:${password}@inshorts-clone.vgwb16o.mongodb.net/?retryWrites=true&w=majority`;

Connection(URL);

app.listen(port,() =>{console.log(`Server running on the port ${port}`);})

DefaultData();