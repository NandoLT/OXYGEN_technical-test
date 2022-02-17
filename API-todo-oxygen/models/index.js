module.exports = {
    mongoDBconect: require('./utils/connectDB'),
    mongoose: require('mongoose'),
    Tasks: require('./tasks.model')
}