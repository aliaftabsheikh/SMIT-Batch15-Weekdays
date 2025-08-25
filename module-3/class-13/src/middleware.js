const AdminAuth =  (req, res, next) => {
        const token = 123

        const isAuthenticated = token === 123

        if (!isAuthenticated) {
            res.status(401).send('Unauthorized User !')
        } else {
            next()
        }
    }


const UserAuth =  (req, res, next) => {
        const token = 123

        const isAuthenticated = token === 12

        if (!isAuthenticated) {
            res.status(401).send('Unauthorized User !')
        } else {
            next()
        }
    }



module.exports = {
    AdminAuth,
    UserAuth
}