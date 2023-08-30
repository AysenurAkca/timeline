const mongoose = require('mongoose')
const moment = require('moment/moment')

const commentSchema = new mongoose.Schema({
    name : {
        type: String,
        required :true
    },
    comment:{
        type : String,
        required : true,
    }, 
    post_id:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Post'
    },
    created_at:{
        type: Date,
        default : Date.now,
        get: function (createAt) {
            return moment(createAt).format('MMMM Do YYYY')
        }

    }


},{timestamps: true})

module.exports = mongoose.model('Comment', commentSchema);