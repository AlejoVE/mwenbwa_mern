const mongoose = require('mongoose');


const gamelogSchema = new mongoose.Schema(
    {
        actions: {
            type: String,
            required: true, 
        }
    },
    {
        timestamps: true,
    }
)

const GamelogModel = mongoose.model('Action', gamelogSchema);

module.exports = GamelogModel