const mongoose = require('mongoose');
const Distance = require('geo-distance');


const ProfessionalSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: 'User',
        unique: true
    }
})

ProfessionalSchema.statics.findDistanceSorted = function(srcLat, srcLng) {

    const src = {
        lat: srcLat,
        lon: srcLng
    }

    this.find().lean().exec((err, result) => {
        if (err) {
            throw(err)
        }

        let professionals = result.map((el) => {
            el.distance = parseFloat(Distance.between(src, {lat: el.lat, lon: el.lng}).in_unit('km').toString().replace(' km', ''))

            return el
        } )

        professionals.sort((a, b) => (a.distance > b.distance) ? 1 : -1)
        console.log(professionals)
    });
}

module.exports = mongoose.model('Professional', ProfessionalSchema);