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
        bookmark =  await db.bookmark_fruit()

        res.status(200).send(bookmark)
    },

    getWishlist: async (req, res) => {

    },

    savedToWishlist: async (req, res) => {
        
    }
}