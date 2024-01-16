import { getEvents } from '../controllers/eventController';// add when debugguing

const express = require('express');
const router = express.Router();
const { 
    getEvent, 
    setEvent, 
    updateEvent, 
    deleteEvent 
} = require('../controllers/eventController')

const { protect } = require('../middleware/authMiddleware');

/*
const usersCtrl = require('../../controllers/api/users.cjs');

// POST /api/users
router.post('/', usersCtrl.create);*/

// you could update to 
// router.route('/').get(getEvent).post(setEvent)
// and 
// router.route('/:id).delete(deleteEvent).put(updateEvent)
// but the below code matches better with the coding style in class

router.get('/', protect, getEvents
// move this functionality to the controller
// (req, res) => {
//     res.status(200).json({message: 'get event'});
// }
);

router.post('/', protect, setEvent);

router.put('/:id', protect, updateEvent);

router.delete('/:id', protect, deleteEvent);

module.exports = router;