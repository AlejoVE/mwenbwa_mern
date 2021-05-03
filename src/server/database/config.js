const mongoose = require('mongoose');

const dbConnection = async () => {

    try{
        await mongoose.connect(process.env.DB_CONNECT, {

            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log('You are connected to the DB.');

    } catch(err) {
        console.log(err)
    }
}

module.exports = {
    dbConnection
}