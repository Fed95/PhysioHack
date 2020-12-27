const mongoose = require('mongoose');
const Distance = require('geo-distance');


const LocationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        require: true
    },
    lng: {
        type: Number,
        require: true
    }
})

LocationSchema.methods.computeDistance = function(lat, lng) {
    const src = {
        lat: lat,
        lon: lng
    }
    return parseFloat(Distance.between(src, {lat: this.lat, lon: this.lng}).in_unit('km').toString().replace(' km', ''))
}


module.exports = mongoose.model('Location', LocationSchema);