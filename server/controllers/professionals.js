const express = require('express')
const router = express.Router()
const professionalModel = require('./../models/professional')


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
        #swagger.parameters['latitude'] = {
         in: 'body',
         description: 'Professional latitude',
         required: true,
         type: 'string'
        } 
        #swagger.parameters['longitude'] = {
         in: 'body',
         description: 'Professional longitude',
         required: true,
         type: 'string'
        } 
        #swagger.parameters['userId'] = {
         in: 'body',
         description: 'Professional user id',
         required: true,
         type: 'string'
        } 
    */
    let description = req.body.description
    let phone = req.body.phone
    let lat = req.body.latitude
    let lng = req.body.longitude
    let userId = req.body.userId
    try {
        let professional = await professionalModel.addProfessional(description, lat, lng, phone, userId)
        if (professional) {
            return res.status(200).json({ message: "The professional has been added", error: false })
        }
    } catch (e) {
        return res.status(400).json(e)
    }

})

router.get('/', async (req, res) => {
    return res.status(200).json(await professionalModel.getAllProfessional())
})

router.get('/:id', async (req, res) => {
    //  #swagger.parameters['id'] = { description: "id of a professional" } 
    let professionalId = req.params.id
    if (!professionalId) {
        return res.status(400).json({ error: true, message: 'Missing professional id' })
    }
    return res.status(200).json(await professionalModel.getByIdProfessional(professionalId))
})

module.exports = router