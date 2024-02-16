const asyncHandler = require('express-async-handler');

const Event = require('../models/eventModels.js');
const User = require('../models/userModel.js');

// @desc    Get events
// @route   GET /api/event
// @access  Private
const getEvents = asyncHandler (async (req, res) => {
    const events = await Event.find({ user: req.user.id});
    res.status(200).json(events);
})

// @desc    Set event
// @route   SET /api/events
// @access  Private
const setEvent = asyncHandler (async (req, res) => {
    console.log(req.body)
    if(!req.body.detail) {
        res.status(400);
        throw new Error ("Please add a text field");
    }

    console.log("got here")
    console.log(req.user.id)


    const event = await Event.create({
        text: req.body.detail,
        user: req.user.id
    })
    res.status(200).json({ message: "Event added successfully", status: "success" });
})

// @desc    Update events
// @route   PUT /api/events/:id
// @access  Private
const updateEvent = asyncHandler (async (req, res) => {
    const event = await Event.findById(req.params.id);

    if (!event) {
        res.status(400);
        throw new Error('Event not found');
    }

    const user = await User.findById(req.user.id);
    
    //check for user
    if(!user) {
        res.status(401);
        throw new Error('User not found');
    }

    // make sure that logged in user can only update their own events
    // by making sure that logged in user matches event user
    if(event.user.toString() !== user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }

    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedEvent);
})

// @desc    Delete events
// @route   DELETE /api/events/:id
// @access  Private
const deleteEvent = asyncHandler (async (req, res) => {
    const event = await Event.findById(req.params.id);//THE PARAM is for the frontend later on

    if (!event) {
        res.status(400);
        throw new Error('Event not found');
    }

    const user = await User.findById(req.user.id);
    
    //check for user
    if(!user) {
        res.status(401);
        throw new Error('User not found');
    }

    // make sure that logged in user can only update their own events
    // by making sure that logged in user matches event user
    if(event.user.toString() !== user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }
    
    const deletedEvent = await Event.findByIdAndDelete(req.params.id); //THE PARAM is for the frontend
     res.status(200).json(deletedEvent);
   // res.status(200).json({ id: req.params.id})
    // await event.remove();
    // res.status(200).json({ id: req.params.id})
})

module.exports = {
    getEvents,
    setEvent,
    updateEvent,
    deleteEvent
}