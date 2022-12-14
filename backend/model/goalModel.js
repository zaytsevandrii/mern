const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    text:{
        type:String,
        required:[true, 'please add a text value']
    }
},{
    timetamps:true
})

module.exports = mongoose.model('Goal', goalSchema);