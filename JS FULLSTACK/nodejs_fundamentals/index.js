// "start": "nodemon index.js" - in package JSON - на каждое изменение - перезапуск сервера

const Application = require('./framework/Application')
const PORT = process.env.PORT || 5000
const userRouter = require('./src/user-router')
const jsonParser = require('./framework/parseJson')
const parseUrl = require('./framework/parseUrl')

const app = new Application()

app.use(jsonParser)
app.use(parseUrl('http://localhost:5000'))
app.addRouter(userRouter)

app.listen(PORT, () => console.log(`SERVER SUCCESSFULLY STARTED AT PORT ${PORT}`))