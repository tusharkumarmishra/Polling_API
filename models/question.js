const mongoose = require('mongoose');

// create the Question Schema
const QuestionSchema = new mongoose.Schema({

    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    // include the array of id of all options in the question Schema
    options: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Option'
        }
    ]

}, {
    timestamps: true
});

module.exports = mongoose.model('Question', QuestionSchema);
// chahie id,title,options  bhej rha hai kuchh or
//video mai dekhe the koi number mlta hai bahut bada sa
// ha lekin vo apne aap milega


