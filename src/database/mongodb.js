const mongoose = require('mongoose')
const { mongoUri } = require('../config/app.config')

module.exports = async () => {
    try {
        await mongoose.connect(mongoUri)
        console.log('[.] MongoDB connected')
    } catch (error) {
        console.log('[x] MongoDB connection error:' + error.message)
        console.log(error)
        process.exit(1)
    }
}
