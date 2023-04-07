import express from 'express';

import Connection from './database/db.js';
import DefaultData from './default.js';
import route from './route/route.js';

const app = express();

app.use('/', route);

const port= 8000;

Connection();

app.listen(port,() =>{console.log(`Server running on the port ${port}`);})

DefaultData();