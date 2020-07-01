module.exports = {
    getFruits: async (req, res) => {
        const db = req.app.get('db'),
        fruits = await db.get_fruits()

        res.status(200).send(fruits)
    },

    getFruitsByName: async (req, res) => {

    },

    getSavedFruits: async (req, res) => {

    },

    bookmarkFruit: async (req, res) => {
        const db = req.app.get('db'),
        {id} = req.session.user,
        {fruit_id, fruit_name, fruit_type, fruit_description, fruit_img} = req.body,
        bookmark =  (await db.bookmark_fruit(fruit_id, id, fruit_name, fruit_type, fruit_description, fruit_img))[0]

        if(bookmark) res.sendStatus(200)
    },

    unBookmarkFruit: async (req, res) => {
        const db = req.app.get('db'),
        unBookmark = await db.unbookmark_fruit()

        res.status(200).send(unBookmark)
    }
}