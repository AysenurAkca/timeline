const mongoose = require('mongoose')
const moment = require('moment/moment')

const postSchema = new mongoose.Schema({
    title:{
        type : String,
        required : true
    },
    review:{
        type : String,
        required : true,
    }, 
    created_at:{
        type: Date,
        default : Date.now,
        get: function (createAt) {
            return moment(createAt).format('MMMM Do YYYY')
        }

    }


},{timestamps: true})

module.exports = mongoose.model('Post', postSchema);