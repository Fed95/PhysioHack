const express = require('express')
const router = express.Router()
const User = require('./../models/user')
const Professional = require('./../models/professional')
const Location = require('./../models/location')

router.post('/add', async (req, res) => {
    try {
        let name = req.body.name
        let surname = req.body.surname
        let mail = req.body.mail
        let password = req.body.password

        let isProfessional = req.body.isProfessional


        let user = new User({ name: name, surname: surname, mail: mail, password: password })
        const result = await user.save()
        if (result) {
            if (isProfessional) {
                let description = req.body.description
                let phone = req.body.phone
                let locations = req.body.locations

                const locations_result = await Location.insertMany(locations)
                const professional = new Professional({ description: description, locations: locations_result, phone: phone, userId: result._id });
                const result_professional = await professional.save()

                result.professionalId = result_professional._id
                result.save()
            }
            return res.status(200).json({ message: "The user has been added", error: false })
        }
    } catch (e) {
        return res.status(400).json({ message: e.toString(), error: true })
    }


    /*
    #swagger.description = "Add new User"
    #swagger.tags = ['Users']
    #swagger.parameters['obj'] = {
        in:'body',
        description:'Add new user, with option for Professional. If it is not a professional set isProfessional to false and do not send other specific parameter for professional',
        schema: {
            $name:"Mario",
            $surname:"bianchi",
            $mail:"mariooo@gmail.com",
            $password:"iammariobianchi",
            $isProfessional:true,
            "description":"test",
            "phone":"234",
            "locations": [
                {
                "name": "Clinica Tu Madre",
                "address": "Via le dita dal naso, 25",
                "lat": 41.925593,
                "lng": 12.479402
                },
                {
                "name": "Consultorio Lo Zozzo",
                "address": "Via i laziali da Roma, 42",
                "lat": 41.9357261,
                "lng": 12.4839667
                }
            ]
        }                     
    }  
       
    */
})


router.get('/', async (req, res) => {
    try {
        const users = await User.find({}).populate({
            path: 'professionalId',
            model: 'Professional'
        })
        return res.status(200).json(users)
    } catch (e) {
        return res.status(400).json({ message: e.toString(), error: true })
    }
    /* #swagger.description = "Get all Users"
       #swagger.tags = ['Users']
    */
})


router.get('/id/:id', async (req, res) => {
    try {
        let userId = req.params.id
        const users = await User.find({ _id: userId }).populate({
            path: 'professionalId',
            model: 'Professional'
        })
        return res.status(200).json(users)
    } catch (e) {
        return res.status(400).json({ message: e.toString(), error: true })
    }
    /* #swagger.description = "Get single user by id"
       #swagger.parameters['id'] = { 
           description: "id of a user",
           required:true
       }
       #swagger.tags = ['Users']
    */


})


module.exports = router