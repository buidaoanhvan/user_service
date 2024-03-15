const app = require('./src/app')
const { port } = require('./src/config/app.config')

app.listen(port, () => {
    console.log(`[.] User service listening on port ${port}`)
})
