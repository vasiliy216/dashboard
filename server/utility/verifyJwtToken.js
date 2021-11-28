import jwt from 'jsonwebtoken'

export default token => new Promise((res, rej) => {
    jwt.verify(token, process.env.JWT_SECRET || "", (err, decodedToken) => {
        if(err || !decodedToken) {
            return rej(err)
        }
        res(decodedToken)
    })
}) 