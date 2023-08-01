import mongoose from "mongoose";

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

// const userSchema = new mongoose.Schema({
//     id: {
//         type: String,
//         required: true
//     }
// })
// var User = mongoose.model('User', userSchema);

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Room Name"],
        trim: true,
        maxLength: [100, 'Room cannot exceed 100 characters in length']
    },
    price: {
        type: Number,
        required: [true, "Please enter room price"],
        maxLength: [4, 'Room cannot exceed 4 characters in length'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'Please enter room description']
    },
    address: {
        type: String,
        required: [true, 'Please enter room address']
    },
    guestCapacity: {
        type: Number,
        required: [true, 'Please enter room capacity']
    },
    numOfBeds: {
        type: Number,
        required: [true, 'Please enter number of beds']
    },
    internet: {
        type: Boolean,
        default: false
    },
    breakfast: {
        type: Boolean,
        default: false
    },
    airConditioned: {
        type: Boolean,
        default: false
    },
    petsAllowed: {
        type: Boolean,
        default: false
    },
    internet: {
        type: Boolean,
        default: false
    },
    roomCleaning: {
        type: Boolean,
        default: false
    },
    ratings: {
        type: Number,
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id:{
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, 'Please enter room category'],
        enum: {
            values: [
                'King',
                'Single',
                'Twins'
            ],
            message: 'Please enter correct category'
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.models?.Room || mongoose.model('Room', roomSchema);