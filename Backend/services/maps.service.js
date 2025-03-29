const axios = require("axios");

module.exports.getAddressCoordinate = async (input) => {
  const apiKey = process.env.GO_MAPS_API;

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

module.exports.getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error('Origin and destination are required');
    }

    const apiKey = process.env.GO_MAPS_API;

    // URL for gomaps.pro Distance Matrix API
    const url = `https://maps.gomaps.pro/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);

        if (response.data.status === 'OK') {
            const element = response.data.rows[0].elements[0];

            if (element.status === 'ZERO_RESULTS') {
                throw new Error('No routes found');
            }

            // Return distance and duration
            return {
                distance: element.distance.text, // e.g., "5.3 km"
                duration: element.duration.text, // e.g., "12 mins"
                distanceValue: element.distance.value, // e.g., 5300 (in meters)
                durationValue: element.duration.value, // e.g., 720 (in seconds)
            };
        } else {
            throw new Error(`API Error: ${response.data.status}`);
        }
    } catch (err) {
        console.error("Error in getDistanceTime:", err.message);
        throw err;
    }
};