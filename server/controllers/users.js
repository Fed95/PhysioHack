const express = require('express')
const router = express.Router()
const User = require('./../models/user')

router.post('/add', async (req, res) => {
    try {
        let name = req.body.name
        let surname = req.body.surname
        let mail = req.body.mail
        let password = req.body.password

        let user = new User({ name: name, surname: surname, mail: mail, password: password })
        const result = await user.save()
        if (result) {
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
        description:'Add new user',
        schema: {
            $name:"Mario",
            $surname:"bianchi",
            $mail:"mariooo@gmail.com",
            $password:"iammariobianchi"
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