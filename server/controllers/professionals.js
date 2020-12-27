const express = require('express')
const router = express.Router()
const Professional = require('./../models/professional')
const Location = require('./../models/location')


router.post('/add', async (req, res) => {
    let description = req.body.description
    let phone = req.body.phone
    let locations = req.body.locations
    let userId = req.body.userId
    try {

        const locations_result = await Location.insertMany(locations)

        const professional = new Professional({ description: description, locations: locations_result, phone: phone, userId: userId });

        const result = await professional.save();
        if (result) {
            return res.status(200).json({ message: "The professional has been added", error: false })
        }
    } catch (e) {
        return res.status(400).json({ message: e.toString(), error: true })
    }
    /*
           #swagger.description = "Add new professional"	
           #swagger.tags = ['Professionals']
           #swagger.parameters['obj'] = {
           in:'body',
           description:'Add new user',
           schema: {
               $description:"description",
               locations:[
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
                ],
               $phone:"892",
               userId:''
           }                     
       }                            
       */
})

router.get('/', async (req, res) => {
    try {
        const p = await Professional.find({}).populate({
            path: 'locations',
            model: 'Location'
        })
        return res.status(200).json(p)
    } catch (e) {
        return res.status(400).json({ message: e.toString(), error: true })
    }
    /*
    #swagger.tags = ['Professionals']
    */
})

router.get('/id/:id', async (req, res) => {
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
        return res.status(400).json({ message: e.toString(), error: true })
    }
    /*  
        #swagger.parameters['id'] = { required:true, description: "id of a professional" }
        #swagger.tags = ['Professionals']
    */
})

router.get('/distance', async (req, res) => {



    try {
        let lat = req.query.latitude
        let lng = req.query.longitude
        return res.status(200).json(await Professional.findDistanceSorted(lat, lng))
    } catch (e) {
        return res.status(400).json({ message: e.toString(), error: true })
    }
    /*  
    #swagger.tags = ['Professionals']
    #swagger.parameters['latitude'] = {
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
})


// TODO: implement deletion of associated locations
// router.delete('/id/:id', async (req, res) => {
//     //#swagger.tags = ['Professionals']  #swagger.parameters['id'] = { description: "id of a professional" }

//     try {
//         let professionalId = req.params.id
//         if (!professionalId) {
//             return res.status(400).json({ error: true, message: 'Missing professional id' })
//         }
//         await Professional.findByIdAndDelete(professionalId)
//         return res.status(200).json({ message: "The professional has been deleted", error: false })
//     } catch (e) {
//         return res.status(400).json({message: e.toString(), error: true})
//     }

// })

module.exports = router