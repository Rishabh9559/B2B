import mongoose from "mongoose";
import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

const Schema=mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },

    role: {
        type: String,
        default: "User",
    }
}, {
    timestamps: true,
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// userSchema.methods.generateAccessToken = async function () {
//     return jwt.sign(
//         {
//             _id: this._id,
//             email: this.email,
//             firstName:this.firstName,
//             lastName:this.lastName,
//         },
//         process.env.ACCESS_TOKEN_SECRET,
//         {
//           expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
//         }

//     );
// };

const User = mongoose.model("User", userSchema);
export default User;
