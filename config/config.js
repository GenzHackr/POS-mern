const mongoose = require("mongoose");
require("colors")

//connectDB Function

const connectdb = async () => {

        try{
            const conn = await mongoose.connect(process.env.MONGO_URI)
            console.log(`MongoDB Connected ${conn.connection.host}` .yellow);

        }
        catch (error) {
            console.log(`error : ${error.message}` .bgRed);
            process.exit(1)
        }

}

//export
module.exports = connectdb