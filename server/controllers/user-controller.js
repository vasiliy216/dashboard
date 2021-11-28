import { UserModal } from '../schemas/index.js'
import { validationResult } from 'express-validator'
import bcrypt from 'bcrypt'

export default class UserController {
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
                res.json({
                    status: "success",
                })
            } else {
                res.json({
                    status: "error",
                    message: "Incorrect password or email"
                })
            }

        })
    }
}