const mongoose = require('mongoose');

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
        ref: 'User'
    }
})

const professionalModel = {
    Professional: mongoose.model('Professional', ProfessionalSchema),
    addProfessional: async (description, lat, lng, phone, userId) => {
        const professional = await professionalModel.getByIdProfessional(userId);

        if (professional){
            throw({code: 422, message: 'The user already associated to a professional.'})
        }

        const newProfessional = new professionalModel.Professional({description: description, lat: lat, lng: lng, phone: phone, userId: userId});

        return newProfessional.save();
    },
    getAllProfessional: () => {
        return professionalModel.Professional.find({});
    },
    getByIdProfessional: (id) => {
        return professionalModel.Professional.findById(id);
    }
}

module.exports = professionalModel;