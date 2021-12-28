import { UserModal } from '../schemas/index.js'
import { validationResult } from 'express-validator'
import { createJwtToken } from '../utility/index.js'
import bcrypt from 'bcrypt'

export default class UserController {
    find(req, res) {
        const user_id = req.query.user_id

        UserModal
            .findById(user_id, '-password -confirmed_hash')
            .populate('avatar background_photo')
            .exec((err, user) => {
                if (err || !user) {
                    return res.status(403).json({
                        message: "User not found."
                    })
                }
                res.json(user)
            })
    }
    create(req, res) {
        const PostData = {
            email: req.body.email,
            password: req.body.password
        }

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({
                errors: errors.array()
            })
        }

        UserModal.findOne({ email: PostData.email }, (err, data) => {

            if (data) {
                return res.json({
                    message: "A user with such an email exists."
                });
            }

            const User = new UserModal(PostData);

            User
                .save()
                .then(data => {
                    res.json(data)
                })
                .catch(err => {
                    res.json({
                        status: "errors",
                        massage: err
                    })
                })

        })

    }
    update(req, res) {
        const PostData = req.body
        const user = req.user

        UserModal.findOneAndUpdate(
            { _id: user._id },
            PostData,
            (err, data) => {
                if (err || !data) {
                    return res.status(403).json({
                        status: "error",
                        message: "Something went wrong.",
                        err
                    })
                }

                if (PostData.new_password && PostData.old_password) {

                    if (bcrypt.compareSync(PostData.old_password, data.password)) {
                        data.password = PostData.new_password;
                    } else {
                        return res.status(403).json({
                            status: "error",
                            message: "Incorrect password!"
                        })
                    }

                }

                data.save();
                const token = createJwtToken(data)
                res.status(200).json({
                    status: "success",
                    message: "Your profile has been successfully updated!",
                    token
                })
            })


    }
    login(req, res) {
        const PostData = {
            email: req.body.email,
            password: req.body.password
        }

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({
                errors: errors.array()
            })
        }
        UserModal.findOne({ email: PostData.email }, (err, data) => {
            if (err || !data) {
                return res.json({
                    message: "User not found"
                });
            }

            if (bcrypt.compareSync(PostData.password, data.password)) {
                const token = createJwtToken(data)
                res.status(200).json({
                    status: "success",
                    message: "Authorization is successful.",
                    token
                })
            } else {
                res.json({
                    status: "error",
                    message: "Incorrect password or email!"
                })
            }

        })
    }
    getIm(req, res) {
        const id = req.user._id

        UserModal
            .findById(id, '-password')
            .populate('avatar background_photo')
            .exec((err, user) => {
                if (err || !user) {
                    return res.status(403).json({
                        message: "User not found."
                    })
                }
                res.json(user)
            })
    }
    getAll(req, res) {
        // console.log(req.socket.remoteAddress)

        // const id = req.user._id;

        UserModal
            // .find({_id: {$ne: id}}, 'first_name last_name phone_number last_seen')
            .find({}, 'first_name last_name phone_number last_seen')
            .then(data => res.json(data))
            .catch(err => {
                return res.status(404).json({
                    status: 'error',
                    message: err
                })
            })
    }
}