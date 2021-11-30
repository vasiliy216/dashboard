import { verifyJwtToken } from '../utility/index.js'

export default (req, res, next) => {

    if (req.path.includes("account"))
        return next()

    console.log("middlewares checkAuth")

    const token = req.headers.token

    if (token) {
        verifyJwtToken(token)
            .then(data => {
                if (data) {
                    req.user = data.data._doc;
                }

                next();
                
            }).catch((err) => {
                res.json({
                    error: err,
                    message: "Invalid token"
                });
            })
    }

}