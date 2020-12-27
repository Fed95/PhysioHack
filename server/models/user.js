require('dotenv').config({ path: './config/.env' });
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const tokenConstant = require('./../constants/tokens')
const validator = require("email-validator");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    mail: {
        unique: true,
        type: String,
        required: true
    },
    professionalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Professional'
    },
    isVerified: {
        type: Boolean,
        default: false,
    }
}, {timestamps: true});

UserSchema.methods.genereteAccessToken = function () {
    let payload = {
        id: this._id,
        name: this.name,
        surname: this.surname,
        email: this.mail
    }
    return jwt.sign(payload, process.env.ACCESS_TOKEN, {
        expiresIn: tokenConstant.ACCESS_TOKEN_EXPIRY
    })
}

UserSchema.methods.verifyAccessToken = function (access_token) {
    let user = this
    return new Promise((resolve, reject)=>{
        jwt.verify(accessToken, process.env.ACCESS_TOKEN, (err, payload)=> {
            if(err){
                resolve({
                    payload:null
                })
            }
            let new_payload = {...payload}
            resolve({
                payload:new_payload
            })
        })
    }) 
}

UserSchema.methods.generateRefreshToken = function () {
    let payload = {
        id: this._id,
        name: this.name,
        surname: this.surname,
        email: this.mail
    }


    return jwt.sign(payload, process.env.REFRESH_TOKEN, {
        expiresIn: tokenConstant.REFRESH_TOKEN_EXPIRY
    })
}

UserSchema.methods.verifyRefreshToken = function (refreshToken) {
    let user = this
    return new Promise((resolve, reject)=>{
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, payload)=> {
            if(err){
                resolve({
                    payload:null
                })
            }
            let new_payload = {...payload}
            resolve({
                payload:new_payload
            })
        })
    }) 
}

UserSchema.pre('save', function (next) {
    let user = this
    if(!validator.validate(user.email)){
        throw('Wrong mail format')
    }
    if (!user.isModified('password')) {
        return next()
    }

    bcrypt.genSalt(10, function (err, salt) {
        if (err) {
            return next(err)
        }

        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) {
                return next(err)
            }
            user.password = hash
            next()
        })
    })

})


module.exports = mongoose.model('User', UserSchema);