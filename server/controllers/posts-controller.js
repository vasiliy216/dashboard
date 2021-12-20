import { PostsModal, UserModal } from '../schemas/index.js'

export default class PostsController {

    constructor(io) {
        this.io = io;
    }

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

                        this.io.emit("SERVER:NEW_POSTS", "Hello. Im socket :)")
                    })
            })

    }
    getPosts(req, res) {
        PostsModal
            .find({ is_show: true })
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
    find(req, res) {
        const post_id = req.query.post_id;
        const user_id = req.query.user_id;

        UserModal
            .findById(user_id, (err, user) => {
                if (err || !user) {
                    return res.status(403).json({
                        message: "User not found."
                    })
                }

                PostsModal
                    .find({"user._id": user._id, is_show: true })
                    .populate('image')
                    .exec((err, posts) => {

                        if (err || !posts) {
                            return res.status(403).json({
                                status: "error",
                                message: "Posts not found."
                            })
                        }
                        
                        res.json({
                            currentPostId: post_id,
                            items: posts
                        })
                    })

            })

    }
}