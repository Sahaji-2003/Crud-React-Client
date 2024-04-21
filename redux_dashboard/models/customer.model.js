const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({

    user_id: {
        type: Number,
        required: true,
        unique: true
    },
    first_name: {
        type: String,
        required: true,

    },
    last_name: {type: String},
    email_user: {
        type: String,
        required: true,
        unique: true   
    },
    phone_no: {
        type: Number,   
    },
    user_role: {
        type: String
    }
    // machine_assign: {
    //     type: Number
    // }         

},{
    versionKey: false
})

module.exports = mongoose.model('customers', customerSchema)