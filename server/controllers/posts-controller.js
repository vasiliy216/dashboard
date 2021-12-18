import { PostsModal, UserModal } from '../schemas/index.js'

export default class PostsController {
    create(req, res) {

        UserModal
            .findById(req.user._id, 'user_name avatar id')
            .populate('avatar')
            .exec((err, data) => {

                const PostData = {
                    ...req.body,
                    user: {
                        ...data._doc,
                        avatar: data._doc.avatar ? data._doc.avatar.url : "",
                    }
                }

                const Posts = new PostsModal(PostData)  
                
                Posts
                .save()
                .then((data, err) => {
    
                    if (err) {
                        return res.status(403).json({
                            status: "error",
                            message: "Something went wrong.",
                            err
                        })
                    }
    
                    res.status(200).json({
                        status: "success",
                        message: "Great, your post has been successfully published."
                    })
                })    
            })

    }
    getPosts(req, res) {
        PostsModal
            .find()
            .populate('user image')
            .exec((err, post) => {

                if (err || !post) {
                    return res.status(403).json({
                        status: "error",
                        message: "Posts not found."
                    })
                }
                res.json(post)
            })
    }
    delete(req, res) {

    }
}