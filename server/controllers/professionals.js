const express = require('express')
const router = express.Router()
const Professional = require('./../models/professional')
const Location = require('./../models/location')


router.post('/add', async (req, res) => {
    // #swagger.description = "Add new professional"
    /*	#swagger.parameters['description'] = {
         in: 'body',
         description: 'Professional description',
         required: true,
         type: 'string'
        } 
        #swagger.parameters['phone'] = {
         in: 'body',
         description: 'Professional phone',
         required: false,
         type: 'string'
        } 
        #swagger.parameters['locations'] = {
         in: 'body',
         description: 'Professional locations',
         required: false,
         type: 'array',
         items: {
            type: 'object',
            schema: 'Location'
         }
        }
        #swagger.parameters['profession'] = {
         in: 'body',
         description: 'Professional profession',
         required: true,
         type: 'string'
        }
        #swagger.parameters['pathlogies'] = {
         in: 'body',
         description: 'Professional pathologies',
         required: false,
         type: 'array'
        } 
        #swagger.parameters['userId'] = {
         in: 'body',
         description: 'Professional user id',
         required: true,
         type: 'string'
        } 
    */
    let first_name = req.body.first_name
    let last_name = req.body.last_name
    let description = req.body.description
    let phone = req.body.phone
    let locations = req.body.locations
    let profession = req.body.profession
    let pathologies = req.body.pathologies
    let userId = req.body.userId

    console.log(first_name)
    console.log(last_name)
    try {

        const locations_result = await Location.insertMany(locations)

        const professional = new Professional({first_name: first_name, last_name: last_name, description: description, locations: locations_result, phone: phone, profession: profession, pathologies: pathologies, userId: userId});

        const result = await professional.save();
        if (result) {
            return res.status(200).json({ message: "The professional has been added", error: false })
        }
    } catch (e) {
        return res.status(400).json({message: e.toString(), error: true})
    }

})

router.get('/', async (req, res) => {
    try {
        const p = await Professional.find({}).populate({
            path: 'locations',
            model: 'Location'
        })
        return res.status(200).json(p)
    } catch (e) {
        return res.status(400).json({message: e.toString(), error: true})
    }
    
})

router.get('/id/:id', async (req, res) => {
    //  #swagger.parameters['id'] = { description: "id of a professional" }
    
    try {
        let professionalId = req.params.id
        if (!professionalId) {
            return res.status(400).json({ error: true, message: 'Missing professional id' })
        }
        const p = await Professional.findById(professionalId).populate({
            path: 'locations',
            model: 'Location'
        })
        return res.status(200).json(p)
    } catch (e) {
        return res.status(400).json({message: e.toString(), error: true})
    }
    
})

router.get('/distance', async (req, res) => {

    /*  #swagger.parameters['latitude'] = {
        in: 'body',
        description: 'Latitude',
        required: true,
        type: 'number'
    } 
    #swagger.parameters['longitude'] = {
        in: 'body',
        description: 'Longitude',
        required: true,
        type: 'number'
    }  */

    try {
        let lat = req.query.latitude
        let lng = req.query.longitude
        return res.status(200).json(await Professional.findDistanceSorted(lat, lng))
    } catch (e) {
        return res.status(400).json({message: e.toString(), error: true})
    }
})


// TODO: implement deletion of associated locations
router.delete('/id/:id', async (req, res) => {
    //  #swagger.parameters['id'] = { description: "id of a professional" }
    
    try {
        let professionalId = req.params.id
        console.log(professionalId)
        if (!professionalId) {
            return res.status(400).json({ error: true, message: 'Missing professional id' })
        }
        await Professional.findByIdAndDelete(professionalId)
        return res.status(200).json({ message: "The professional has been deleted", error: false })
    } catch (e) {
        return res.status(400).json({message: e.toString(), error: true})
    }
    
})

module.exports = router