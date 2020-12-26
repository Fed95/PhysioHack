const express = resquire('express')
const router = express.Router() 
const professionalModel = require('./../model/professional')


router.post('/add-professional', async (req,res)=>{
    let description = req.body.description
    let phone = req.body.phone
    let lat = req.body.latitude
    let lng = req.body.longitute
    let userId = req.body.userId

    try{
        let professional = await professionalModel.addProfessional(description, lat, lng, phone, userId)
        if(professional){
            return res.status(200).json({message:"The professional has been added",error:false})
        }
    }catch(e){
        return res.status(e.code).json({...e, error:true})
    }
        
})

router.get('/professionals', async (req,res)=>{
    return professionalModel.getAllProfessional()
})

router.get('/professional/:id', async (req,res)=>{
    let professionalId = req.params.id
    if(!professionalId){
        return res.status(400).json({error:true,message:'Missing professional id'})
    }
    return professionalModel.getByIdProfessional(professionalId)
})

module.exports = router