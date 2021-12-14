import express from 'express'
import dotenv from 'dotenv'
import { createServer } from 'http'

dotenv.config()

import { Routes, Socket } from './core/index.js'

const app = express();
const http = createServer(app);
const io = Socket(http);

import './core/db.js'

Routes(app, io)

http.listen(process.env.PORT, () => {
    console.log(`Server: http://localhost:${process.env.PORT}`);
})