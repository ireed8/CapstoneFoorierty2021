const { Router } = require("express");
const synonyum = require("../models/synonyums");

const router = Router();

// Create record in MongoDB
router.post("/synonyums", (request, response) => {
  const newSynonyum = new synonyum.model(request.body);
  newSynonyum.save((err, synonyum) => {
    return err ? response.sendStatus(500).json(err) : response.json(synonyum);
  });
});

// Get all synonyum records
router.get("/synonyums", (request, response) => {
  synonyum.model.find({}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

// Get a synonyum by ID
router.get("/synonyums/:id", (request, response) => {
  synonyum.model.findById(request.params.id, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

// Delete a synonyum by ID
router.delete("/synonyums/:id", (request, response) => {
  synonyum.model.findByIdAndRemove(request.params.id, {}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

// Update a synonyum by ID
router.put("/synonyums/:id", (request, response) => {
  const body = request.body;
  synonyum.model.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        crust: body.meat,
        cheese: body.vegatable,
        sauce: body.starch,
        toppings: body.nutrition
      }
    },
    (error, data) => {
      if (error) return response.sendStatus(500).json(error);
      return response.json(request.body);
    }
  );
});

module.exports = router;
