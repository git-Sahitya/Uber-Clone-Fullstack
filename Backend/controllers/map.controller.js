const mapService = require("../services/maps.service");
const { validationResult } = require("express-validator");

module.exports.getCoordinates = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { input } = req.query;

  try {
    const coordinates = await mapService.getAddressCoordinate(input);
    res.status(200).json(coordinates);
  } catch (error) {
    if (error.response && error.response.data) {
      return res.status(500).json({
        message: "Error from gomaps.pro API",
        details: error.response.data,
      });
    }

    res
      .status(500)
      .json({ message: "An error occurred while fetching coordinates" });
  }
};
