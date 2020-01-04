const mongoose=require('mongoose')
const url='mongodb://localhost/contacts'
mongoose.connect(url)
.then(()=>{console.log('connected sucessfully')})
.catch((err)=>{return err})
const Schema=mongoose.Schema;

//create contact model
const contactSchema=new Schema({
    name:{
        type:String,
    },
    phone:{
        type:Number
    },
    title:{
        type:String,
    }
})

module.exports=mongoose.model('contacts',contactSchema)