const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect('mongodb+srv://grimaldosoto:inPKrFLXyGujsFPx@cluster0.nazrzh1.mongodb.net/hospitaldb');
        
        console.log('DB online');
    }catch (error){
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ver logs');
    }
}

module.exports = {
    dbConnection
};