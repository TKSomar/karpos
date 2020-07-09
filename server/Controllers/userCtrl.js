module.exports = {
    editFirst: async (req, res) => {
        const db = req.app.get('db'),
        {id} = req.session.user,
        {newFirst} = req.body,
        edited = await db.edit_first_name(newFirst, id)

        res.status(200).send(edited)
    }
}