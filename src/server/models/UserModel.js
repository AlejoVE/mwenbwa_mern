const mongoose = require('mongoose');
// const { isEmail } = require('validator');
// const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
    {
        userName : {
            type:String,
            required: true,
            unique: true,
            minLength: 3,
            maxLength: 20,
            lowercase: true,
            trim: true
        },
        email : {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password : {
            type: String,
            required: true,
            max: 1024,
            minLength: 6,
            trim: true
        },
        firstName : {
            type: String,
            minLength: 3,
            maxLength: 34,
            trim: true,
        },
        lastName : {
            type: String,
            minLength: 3,
            maxLength: 34,
            trim: true,
        },
        color : {
            type: String,
            default : "#fff"
        },
        leaves : {
            type: Number
        },
        trees : {
            type: Number
        }
    },
    {
        timestamps: true,
    }
)

userSchema.method('toJSON', function () {
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
})

// userSchema.pre("save", async function(next){
//     const salt = await bcrypt.genSalt();
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
// })

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;