const { default: Axios } = require("axios")

module.exports = {
    getFruits: async (req, res) => {
        const db = req.app.get('db'),
        fruits = await db.get_fruits()

        res.status(200).send(fruits)
    },

    addFruit: async (req, res) => {
        const db = req.app.get('db')
        const {name, type, description, img} = req.body,
        newFruit = await db.add_fruit(name, type, description, img)

        res.status(200).send(newFruit)
    },

    bookmarkFruit: async (req, res) => {
        const db = req.app.get('db'),
        {user_id, fruit_id, fruit_name, fruit_type, fruit_description, fruit_img} = req.body,
        bookmark =  (await db.bookmark_fruit(user_id, fruit_id , fruit_name, fruit_type, fruit_description, fruit_img))[0]

        if(bookmark) res.sendStatus(200)
    },

    unBookmarkFruit: async (req, res) => {
        const db = req.app.get('db'),
        {user_id, fruit_id} = req.params,
        unBookmark = await db.unbookmark_fruit(user_id, fruit_id)

        if(unBookmark) res.sendStatus(200)
    },

    getBookmarked: async (req, res) => {
        const db = req.app.get('db'),
        {user_id} = req.params
        console.log(user_id)
        let bookmarks = await db.get_bookmarked(author_id)
        console.log(bookmarks)
        res.status(200).send(bookmarks)
    },

    getBookmarks: async (req, res) => {
        const db = req.app.get('db'),
        bookmarks = await db.get_bookmarks()

        res.status(200).send(bookmarks)
    }
}