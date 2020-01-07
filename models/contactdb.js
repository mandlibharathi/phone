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
        type:String,
        required:true,validate: {
            validator: function(v) {
              return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: '{VALUE} is not a valid phone number!'
          },
    },
    title:{
        type:String,
    }
})

module.exports= mongoose.model('contacts',contactSchema)
