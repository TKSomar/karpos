const bcrypt = require('bcrypt');

module.exports = {
    login: async (req, res) => {
        const db = req.app.get('db'),
            {email, password} = req.body,
            existingUser = (await db.check_user(email))[0]

        if(!existingUser) return res.status(404).send('User does not exist.')

        const authenticated = bcrypt.compareSync(password, existingUser.password)

        if(!authenticated)
            return res.status(403).send('Email or password is incorrect.')

            delete existingUser.password

            req.session.user = existingUser

            res.status(200).send(req.session.user)
    },

    register: async (req, res) => {
        const db = req.app.get('db'),
            {first_name, last_name, email, password} = req.body,
            existingUser = (await db.check_user(email))[0],
            salt = bcrypt.genSaltSync(10),
            hash = bcrypt.hashSync(password, salt)

            if(existingUser) return res.status(409).send('User already exists.')

            const newUser = (await db.register_user(first_name, last_name, email, hash))[0]

            req.session.user = newUser
            
            res.status(200).send(req.session.user)
    },

    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    },

    getUser: (req, res) => {
        if(req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.sendStatus(404)
        }
    },
}