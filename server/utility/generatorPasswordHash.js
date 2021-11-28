import bcrypt from 'bcrypt'

export default password => {
    return new Promise((res, rej) => {
        bcrypt.hash(password, 10, function (err, hash) {
            if (err) return rej(err)

            res(hash)
        })
    })
}