import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
const app = express();
import { createServer } from 'http'
import mongoose from 'mongoose'
import { checkAuth } from './middlewares/index.js'
import { UserController, UploadFileController } from './controllers/index.js'
import { registerValidation, loginValidation } from './utility/validation/index.js'

import { Multer } from './core/index.js'

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
});


app.use(cors());
app.use(bodyParser.json());
app.use(checkAuth);

const User = new UserController();
const UploadFile = new UploadFileController();

const http = createServer(app);

app.get('/user/im', User.getIm)
app.put('/user/update', User.update)
// app.get('/user/delete')

app.post('/account/register', registerValidation, User.create);
app.post('/account/login', loginValidation, User.login);
// app.put('/user/:id',  User);

app.post('/file', Multer.single('file'), UploadFile.create)
app.delete('/file')

http.listen(process.env.PORT, () => {
    console.log(`Server: http://localhost:${process.env.PORT}`);
})