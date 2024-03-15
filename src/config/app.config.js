require('dotenv').config({ path: process.env.NODE_ENV + '.env' })

module.exports = {
    port: process.env.PORT,
    mongoUri: process.env.MONGO_URI,
}
