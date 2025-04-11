const rideService = require("../services/ride.service");
const { validationResult } = require("express-validator");
const mapService = require("../services/maps.service.js");
const {sendMessageToSocketId} = require('../socket.js');
const rideModel = require("../models/ride.model.js");

module.exports.createRide = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { userId, pickup, destination, vehicleType } = req.body;

  try {
    const ride = await rideService.createRide({
      user: req.user._id,
      pickup,
      destination,
      vehicleType,
    });
    res.status(201).json(ride);

    const pickupCoordinates = await mapService.getAddressCoordinate(pickup);
    console.log("PickupCoordinates:", pickupCoordinates);


    const captainsInRadius = await mapService.getCaptainsInTheRadius(pickupCoordinates.lat, pickupCoordinates.lon, 2);
    
    ride.otp = ""

    const rideWithUser = await rideModel.findOne( { _id : ride._id}).populate('user')

    captainsInRadius.map(captain =>{
      
      sendMessageToSocketId(captain.socketId , {
        event : 'new-ride',
        data : rideWithUser
      })
    })

    console.log("Captain in radius :", captainsInRadius);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.getFare = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { pickup, destination } = req.query;

  try {
    const fare = await rideService.getFare(pickup, destination);
    return res.status(200).json(fare);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


module.exports.confirmRide = async (req,res) => {
  
}