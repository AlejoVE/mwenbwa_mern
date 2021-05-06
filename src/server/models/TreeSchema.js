const mongoose = require("mongoose");


const treeSchema = new mongoose.Schema(
    {
        hauter_totale: {
            type: Number,
            required: true,
            trim: true,
        },
        nom_complet: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 30,
            trim: true
        },
        diametre_cime: {
            type: Number,
            required: true,
            trim: true
        },
        link: {
            type: String,
            required: true,
            trim: true,
        },
        value: {
            type: Number,
            required: true,
            trim: true

        },
        owner: {
            type: Schema.Types.ObjectId,

        },
        name: {
            type: String,
            minLength: 3,
            maxLength: 20,
            trim: true

        },
        locked: {
            type: Boolean,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            trim: true

        },
        lat: {
            type: Number,
            required: true,
            trim: true

        },
        long: {
            type: Number,
            required: true,
            trim: true

        },
        history: {
            type: Array,

        },
        comments: {
            type: Array
        }
    }
)

const TreeModel = mongoose.model('Tree', treeSchema);

module.exports = TreeModel