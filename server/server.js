import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
const app = express();
import { createServer } from 'http'
import mongoose from 'mongoose'
import { checkAuth } from './middlewares/index.js'
import { UserController } from './controllers/index.js'
import { registerValidation, loginValidation } from './utility/validation/index.js'

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

const http = createServer(app);

app.get('/user/im', User.getIm)

app.post('/auth/register', registerValidation, User.create);
app.post('/auth/login', loginValidation, User.login);
// app.put('/user/:id',  User);

http.listen(process.env.PORT, () => {
    console.log(`Server: http://localhost:${process.env.PORT}`);
})