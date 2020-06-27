module.exports = {
    getPosts: async (req, res) => {
        const db = req.app.get('db'),
        {userposts, search} = req.query
        let posts
        if(!req.session.user) return res.sendStatus(404)
        const {id} = req.session.user

        if (userposts === 'true') {
            posts = await db.get_posts_for_user(search)
        } else {
            posts = await db.get_all_posts_no_user(search, id)
        }
    },

    getPost: async (req, res) => {
        const db = req.app.get('db'),
        {post_id} = req.params,
        post = (await db.get_post(post_id))[0]

        res.status(200).send(post)
    },

    createPost: async (req, res) => {
        const db = req.app.get('db'),
        {id} = req.session.user,
        {title, content, img} = req.body,
        post = (await db.create_post(id, title, content, img))[0]

        if(post) res.sendStatus(200)
    },

    editPost: async (req, res) => {
        const db = req.app.get('db'),
        {title, content, img} = req.body,
        {post_id} = req.params,
        post = (await db.edit_post(title, content, img, post_id))[0]

        res.status(200).send(post)
    },

    deletePost: async (req, res) => {
        const db = req.app.get('db'),
        {post_id} = req.params,
        posts = await db.delete_post(post_id)

        res.status(200).send(posts)
    }
}