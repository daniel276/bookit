import mongoose from "mongoose";

const dbConnect = () => {
    if(mongoose.connection.readyState >= 1){
        return
    }

    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con => console.log('Successfully connected'));
}

export default dbConnect;