import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express();
import { createServer } from 'http'
import mongoose from 'mongoose'
import { UserController } from './controllers/index.js'
import { registerValidation, loginValidation } from './utility/validation/index.js'

mongoose.connect("mongodb+srv://valid:valid@cluster0.64l6m.mongodb.net/dashboardDB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(bodyParser.json());

const User = new UserController();

const http = createServer(app);

app.post('/user/register', registerValidation, User.create);
app.post('/user/login', loginValidation, User.login);
// app.put('/user/:id',  User);

http.listen('4000', () => {
    console.log(`Server: http://localhost:4000`);
})