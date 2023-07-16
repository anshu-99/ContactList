const express=require('express') // import express

const path=require('path') //import path

const port=8000 //port num

const db=require('./config/mongoose') //db will import the configiration module

const Contact=require('./model/contact') //model part imported

const app=express(); //app will get all the functionality of express
app.set('view engine','ejs') // set view engine as ejs
app.set('views',path.join(__dirname,'views')) //set path to the parent dir to view dir

app.use(express.urlencoded()) // use - middleware
app.use(express.static('assests')) //acquire assests

app.get('/', function(req, res) {
    Contact.find({}, function(err, contacts) {
        if (err) {
            console.log("Error fetching the records", err);
            return;
        }

        return res.render('home', {
            title: "My Contact",
            contact_list: contacts
        });
    });
});


app.post('/create-contact',function(req,res){
    Contact.create({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        phoneNumber:req.body.phoneNumber,
        email:req.body.email
    },function(err,newContact){
        if(err){
            console.log('error in adding contact',err);
            return;
        }
        console.log("*****",newContact)
        
    })
    return res.redirect('back')
})

// running
app.listen(port,function(err){
    if(err){
        console.log("error:",err)
        return console.log("error occured")
    }
    console.log('Our express server is running on port number:',port)
})

// delete
app.get('/delete-contact', function(req, res){
    // console.log(req.query);
    let id = req.query.id

    Contact.findByIdAndDelete(id,function(err){
        if(err){
         console.log("error in deleting the contact",err)
        }
        return res.redirect('back');
    })
});
// app.get("/delete-contact/", function (req, res) {
//     let id = req.query.id;
  
//     Contact.findByIdAndDelete(id)
//       .then((deletedContact) => {
//         console.log("Deleted contact:", deletedContact);
//         return res.redirect("back");
//       })
//       .catch((error) => {
//         console.error("Error deleting contact:", error);
//         return res.redirect("back");
//       });
//   });

