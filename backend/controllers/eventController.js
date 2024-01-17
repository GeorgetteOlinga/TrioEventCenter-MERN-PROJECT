const model = require("../models/eventModel");

const eventAdd = async (data, res) => {
  const response = await model.eventModel(data);

  if (response) {
    res.json({ message: "Event added successfully", status: "success" });
  } else {
    res.json({ message: "Fail to add Event" });
  }
};

module.exports = { eventAdd };
