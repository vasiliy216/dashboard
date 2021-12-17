import cors from 'cors'
import bodyParser from 'body-parser'
import { Multer } from '../core/index.js'

import { UserController, UploadFileController, PostsController } from '../controllers/index.js'
import { checkAuth, updateLastSeen } from '../middlewares/index.js'
import { loginValidation, registerValidation } from '../utility/validation/index.js'

const createRoutes = (app, io) => {

    app.use(cors());
    app.use(bodyParser.json());
    app.use(checkAuth);
    app.use(updateLastSeen);

    const User = new UserController();
    const File = new UploadFileController();
    const Posts = new PostsController();

    app.get('/user/all', User.getAll)
    
    app.get('/user/im', User.getIm)
    app.put('/user/update', User.update)

    app.post('/account/register', registerValidation, User.create);
    app.post('/account/login', loginValidation, User.login);

    app.get('/post', Posts.getPosts)
    app.post('/post', Posts.create)
    app.delete('/post/:id')

    app.post('/file', Multer.single('file'), File.create)
    app.delete('/file')

}

export default createRoutes;