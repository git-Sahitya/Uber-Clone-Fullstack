const axios = require("axios");

module.exports.getAddressCoordinate = async (input) => {
  const apiKey = process.env.GOOGLE_MAPS_API;

  const url = `https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;


  try {
    const response = await axios.get(url);

    if (response.data.status === "OK") {
      const predictions = response.data.predictions;

      if (predictions && predictions.length > 0) {
        // Assuming the API provides geometry.location with lat/lng
        const placeId = predictions[0].place_id;

        // Fetch place details to get latitude and longitude
        const placeDetailsUrl = `https://maps.gomaps.pro/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`;
        const placeDetailsResponse = await axios.get(placeDetailsUrl);

        if (placeDetailsResponse.data.status === "OK") {
          const location = placeDetailsResponse.data.result.geometry.location;
          return {
            description: predictions[0].description,
            latitude: location.lat,
            longitude: location.lng,
          };
        }
      }
    }
  } catch (error) {
    console.error("Error in getAddressCoordinate:", error.message);
    throw error;
  }
};
