import {createRouter } from 'next-connect'
import dbConnect from '../../../config/dbConnect';
import { allRooms, newRoom } from '../../../controllers/roomController'

const router = createRouter();

dbConnect();

router.get(allRooms);

router.post(newRoom)

export default router.handler({
    onError: (err, req, res) => {
      console.error(err.stack);
      res.status(err.statusCode || 500).end(err.message);
    },
  });