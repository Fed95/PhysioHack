const mongoose = require('mongoose');
const Location = require('./../models/location')


const ProfessionalSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    locations: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Location',
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    profession: {
        type: String,
        required: true
    },
    pathologies: {
        type: [String],
        required: false
    }
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User',
    //     unique: true
    // }
})

ProfessionalSchema.post('remove', function (next) {
    const professional = this
    professional.locations.forEach((x) => Location.findByIdAndDelete(x))
    next()
})

ProfessionalSchema.statics.findDistanceSorted = async function(srcLat, srcLng) {

    let result = await this.find()
                           .populate({
                                path: 'locations',
                                model: 'Location'
                            })
                           .lean()

    let professionals = result.map((p) => {
        const distances = p.locations.map((x) => Location(x).computeDistance(srcLat, srcLng))
        p.distance = Math.min(...distances)
        return p
    } )

    return professionals.sort((a, b) => (a.distance > b.distance) ? 1 : -1)
}

module.exports = mongoose.model('Professional', ProfessionalSchema);