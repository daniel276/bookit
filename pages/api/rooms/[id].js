import {createRouter } from 'next-connect'
import dbConnect from '../../../config/dbConnect';
import { deleteRoom, getRoomDetails, updateRoom } from '../../../controllers/roomController'

const router = createRouter();

dbConnect();

router.get(getRoomDetails);

router.put(updateRoom)

router.delete(deleteRoom)

export default router.handler();           