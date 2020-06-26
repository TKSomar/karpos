const bcrypt = require('bcrypt');

module.exports = {
    login: async (req, res) => {
        const db = req.app.get('db');
        const {email, password} = req.body;

        const user = await db.check_user(email)
        if (!user[0]){
            return res.status(404).send('User does not exist')
        } else {
            const authenticated = bcrypt.compareSync(password, user[0].password)
            if (authenticated) {
                req.session.user = {
                    userId: user[0].id,
                    username: user[0].email
                }
                res.status(200).send(req.session.user)
            } else {
                res.status(403).send('Username or password incorrect')
            }
        }
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
    }
}