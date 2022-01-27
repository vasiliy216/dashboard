import express from 'express'
import dotenv from 'dotenv'
import { createServer } from 'http'

dotenv.config()

import { CreateRoutes, CreateSocket } from './core/index.js'

const app = express();
const http = createServer(app);
const io = CreateSocket(http);

import './core/db.js'

app.use(express.static("../webapp/build"));

CreateRoutes(app, io)

http.listen(process.env.PORT, () => {
    console.log(`Server: http://localhost:${process.env.PORT}`);
})