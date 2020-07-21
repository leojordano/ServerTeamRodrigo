const conn = require('../database/conn.js')


exports.module = {
    login: async (req, res) => {
        const { name, email, pass } = req.body

        const findUsers = await conn('users').select('*').where({ name, email, pass })
        
    }
}