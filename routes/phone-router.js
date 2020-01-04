const express=require('express')
const router=express.Router()
const contacts=require('../models/contactdb')

// adding  new contacts 
router.post('/add',(req,res)=>{
    let name=req.body.name;
    let phone=req.body.phone;
    let title=req.body.title

    let newContact=new contacts()
    newContact.name=name;
    newContact.phone=phone;
    newContact.title=title;
contacts.findOne({'phone':phone},(err,file)=>{
    if(err){
        return err
    }
     if(file){
     res.json({msg:'sorry phone number already saved'})
    }
    else{
        newContact.save((err,Response)=>{
            if(err) return err;
            else
            res.json({msg:'contact saved sucessfully', res:Response})
        })
    }
})
})


router.get('/',(req,res)=>{
    contacts.find({},(err,resp)=>{
        if(err){
            return err;
        }
        else{
            res.json({msg:resp})
        }
    })
})

// update contact

router.put('/update',(req,res)=>{
    let name=req.body.name;
    let phone=req.body.phone;
    let title=req.body.title;
contacts.findOneAndUpdate({'phone':phone},{name:name,phone:phone,title:title},(err,result)=>{
    if(err){
        return err
    }
    else{
        res.json({msg:'update contact sucessfully ',resp:result})
    }
})
})

router.delete('/delete',(req,res)=>{
    let phone=req.body.phone;
    contacts.findOneAndRemove({'phone':phone},(err,result)=>{
        if(err){
            return err;
        }
        else{
            res.json({msg:'contact deleted sucessfully', result:result})
        }
    })
})


module.exports=router;