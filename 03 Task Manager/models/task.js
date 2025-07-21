const mongoose = require('mongoose')

// Set up structure for all documents
/**
 * Only the items we set in this schema will be saved.
 * Values sent under different keys will be ignored/lost.
 */
const taskSchema = new mongoose.Schema({
    name: String,
    completed: Boolean
})

module.exports = mongoose.model('Task', taskSchema)