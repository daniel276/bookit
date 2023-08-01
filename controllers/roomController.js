import Room from "../models/room";
import ErrorHandler from "../utils/errorHandler";

const allRooms = async (req, res) => {
    
    try {
        const rooms = await Room.find();
        res.status(200).json({
            success: true,
            count: rooms.length,
            rooms
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }

}

const newRoom = async (req, res) => {
    try {
        const createRoom = await Room.create(req.body);
        res.status(200).json({
            success: true,
            createRoom
        })

    } catch (error) {
        res.status(400).json({
            success: 'false',
            error: error.message
        })
    }
}

const getRoomDetails = async (req, res, next) => {
    try {
        const selectedRoom = await Room.findById(req.query.id);

        if(!selectedRoom){
            return next(new ErrorHandler('Not Found', 404));
        }

        res.status(200).json({
            success: true,
            selectedRoom
        })

    } catch (error) {
        res.status(400).json({
            success: 'false',
            error: error.stack
        })
    }
}

const updateRoom = async (req, res) => {
    try {

        let selectedRoom = await Room.findById(req.query.id);

        if(!selectedRoom){
            return res.status(404).json({
                success: false,
                error: 'Room id not found',
                id: req.query.id
            })
        }

        selectedRoom = await Room.findByIdAndUpdate(req.query.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })

        res.status(200).json({
            success: true,
            selectedRoom
        })

    } catch (error) {
        res.status(400).json({
            success: 'false',
            error: error.message
        })
    }
}

const deleteRoom = async (req, res) => {
    try {

        const room = await Room.findById(req.query.id);

        if(!room){
            return res.status(404).json({
                success: false,
                error: 'Room id not found',
                id: req.query.id
            })
        }

        await room.deleteOne();

        res.status(200).json({
            success: true,
            message: "Room successfully deleted"
        })

    } catch (error) {
        res.status(400).json({
            success: 'false',
            error: error.message
        })
    }
}

export {
    allRooms,
    newRoom,
    getRoomDetails,
    updateRoom,
    deleteRoom
}