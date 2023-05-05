const db = require("../db")

class UserController {
    // создать пользователя
    async createUser(req, res){
        const {name, surname} = req.body
        // все запросы базы данных асинхронны
        const newPerson = await db.query('INSERT INTO PERSON (name, surname) values ($1, $2) RETURNING *', [name, surname])
        res.json(newPerson.rows[0])
    }
    // возвращать клиенту всех пользователей
    async getUsers(req, res){
        const users = await db.query('SELECT * FROM person')
        res.json(users.rows)
    }
    // возвращает конкретного какого-то пользователя
    async getOneUser(req, res){
        const id = req.params.id
        const user = await db.query('SELECT * FROM person where id = $1', [id])
        res.json(user.rows[0])
    }
    // обновлять данные о пользователе
    async updateUser(req, res){
        const {id, name, surname} = req.body
        const user = await db.query('UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *',
            [name, surname, id]
        )
        res.json(user.rows[0])
    }
    // удалять пользователя
    async deleteUser(req, res){
        const id = req.params.id
        const user = await db.query('DELETE FROM person where id = $1', [id])
        res.json(user.rows[0])
    }
}

module.exports = new UserController()