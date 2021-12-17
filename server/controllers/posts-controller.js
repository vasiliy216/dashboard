import { PostsModal } from '../schemas/index.js'

export default class PostsController {
    create(req, res) {
        const PostData = {
            ...req.body,
            user: req.user._id
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

                res.json(data)
            })
    }
    getPosts(req, res) {
        PostsModal
            .find()
            .populate('user image')
            .exec((err, post) => {
                if (err || !post) {
                    return res.status(403).json({
                        message: "Posts not found."
                    })
                }
                res.json(post)
            })
    }
    delete(req, res) {

    }
}