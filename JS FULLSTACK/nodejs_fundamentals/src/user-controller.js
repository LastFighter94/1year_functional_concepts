const users = [
    {id: 1, name: 'Yuriy'},
    {id: 2, name: 'Misha'},
]

const getUsers = (req, res) => {
    // console.log(req.params, 'params')
    if (req.params.id) {
        return res.send(users.find(user => user.id == req.params.id))
    }
    res.send(users)
}

const createUser = (req, res) => {
    // console.log(req.body) выведет undefined в консоли
    const user = req.body
    users.push(user)
    res.send(user)
}

module.exports = {
    getUsers,
    createUser
}