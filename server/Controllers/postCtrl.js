module.exports = {
    getPosts: async (req, res) => {
        const db = req.app.get('db'),

        posts = await db.get_all_posts_for_user()

        res.status(200).send(posts)
    },

    getPost: async (req, res) => {
        const db = req.app.get('db'),
        {post_id} = req.params,
        post = (await db.get_post(post_id))[0]

        res.status(200).send(post)
    },

    createPost: async (req, res) => {
        const db = req.app.get('db'),
        {id, first_name, last_name} = req.session.user,
        {title, content, img} = req.body,
        post = (await db.create_post(id, first_name, last_name, title, content, img))[0]

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