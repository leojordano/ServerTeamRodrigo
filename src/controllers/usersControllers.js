const conn = require('../database/conn.js')
const bcrypt = require('bcrypt')

const salt = 10

exports.module = {
    index: async function(req, res) {
        const users = await conn('users').select('*')

        return res.json(users)
    },
    create: async function(req, res) {
        if(!req.headers.is_admin) {
            return res.json('You dont have permission')
        }

        if(req.headers.pass != '123456') {
            return res.json('Senha Incoreta')
        }

        const {name, email, pass, wpp, img, defic, problems, city, uf} = req.body

        const users_name = await conn('users').where('name',name).select('*')
        const users_email = await conn('users').where('email', email).select('*')
        
        if(users_email.length > 0 && users_name.length > 0) {
            return res.json('Nome e Email já em uso!!')
        }

        if(users_name.length > 0) {
            return res.json('Nome já em uso!!')
        }

        if(users_email.length > 0) {
            return res.json('Email já em uso!!')
        }

        bcrypt.hash(pass, 10, async (err, hash) => {
            const newDado = {name, email, pass: hash, wpp, img, defic, problems, city, uf}
            const userCreate = await conn('users').insert(newDado)


            return res.json(userCreate)
        })
        
        return res.json(hashAndSenha)
    },
    delete: async function(req, res) {
        if(req.headers.is_admin == true) {
            if(req.headers.pass == '123456') {

                const userAtBeDelete = await conn('users').where('name', req.params.user).select("*").limit(1)

                if(userAtBeDelete.length > 0) {
                    await conn('users').where('name', req.params.user).select("*").limit(1).delete()
                    return res.json('Deletado com sucesso')
                }
                return res.json('User not found')
            }

            return res.json('Password incorrect')
        }

        return res.json('You dont have Permission')
    },
    findOne: async function(req, res) {
        const { email, pass } = req.body
        const user = await conn('users').where('email', email).select('*').limit(1)
        
        if(user.length > 0) {
            await bcrypt.compare(pass, user[0].pass, (err, result) => {
                return res.json(result)
            })
        }

        return res.json('Nenhum usuario encontrado')
    },
    
}