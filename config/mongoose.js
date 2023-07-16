// import library
const mongoose=require('mongoose')

// connect to database
mongoose.connect('mongodb://127.0.0.1/contact_list_db')

// acquire the connection to check if it's successfully connected or not
var db = mongoose.connection;

// error
db.on('error',console.error.bind(console,'error connecting database'))

// running successfully
db.once('open',function(){
    console.log('Succesfully connected to the Database')
})