const mongoose = require("mongoose")

const activitySchema = new mongoose.Schema ({
    activity: {type: String, required: true},
    img: {type: String, required: true},
    itinerary: {type: mongoose.Types.ObjectId, ref: "Itinerary"},
})                                                   
const Activity = mongoose.model("Activity", activitySchema)

module.exports = Activity