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

    getUserPosts: async (req, res) => {
        const db = req.app.get('db'),
        {author_id} = req.params,
        userPosts = await db.get_users_posts(author_id)

        res.status(200).send(userPosts)
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
        {post_id} = req.params,
        {id} = req.session.user,
        {newTitle, newContent} = req.body

        const check = await db.check_if_user_is_author(id, post_id)

        if (check.length != 0) {
            await db.edit_post(newTitle, newContent, post_id)
            res.status(200).send(`Post successfully edited.`)
        } else {
            res.status(500).send(`Whoops, something went wrong! Please try again.`)
        }
    },

    deletePost: async (req, res) => {
        const db = req.app.get('db'),
        {post_id} = req.params,
        {id} = req.session.user

        const check = await db.check_if_user_is_author(id, post_id)

        if (check.length != 0){
            await db.delete_post(post_id)
            res.status(200).send(`Post has been deleted.`)
        } else {
            res.status(500).send(`Whoops, something went wrong! Please try again.`)
        }
    }
}