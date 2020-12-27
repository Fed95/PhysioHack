const mongoose = require('mongoose')
const tokenConstant = require('./../constants/tokens')

//we store only refresh token for check presence into auth.js middleware
const refreshTokenSchema = new mongoose.Schema({
    token:{
        type:String,
        required:true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
        expires: tokenConstant.REFRESH_TOKEN_EXPIRY
    }
}, {timestamps: true});


module.exports = mongoose.model("RefreshToken",refreshTokenSchema)