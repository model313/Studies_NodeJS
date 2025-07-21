const mongoose = require('mongoose')

// Set up structure for all documents
/**
 * Only the items we set in this schema will be saved.
 * Values sent under different keys will be ignored/lost.
 */
const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide name'],
        trim: true,
        maxlength: [20, 'Task name can not be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

/**
 * Data Validation
 * - required   : throws error if property is not included in the request
 * - trim       : removes empty spaces before/after
 */

module.exports = mongoose.model('Task', taskSchema)