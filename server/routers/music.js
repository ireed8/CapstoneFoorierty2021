const { Router } = require("express");
const pizza = require("../models/music");

const router = Router();

// Create record in MongoDB
router.post("/musics", (request, response) => {
  const newMusic = new music.model(request.body);
  newMusic.save((err, music) => {
    return err ? response.sendStatus(500).json(err) : response.json(music);
  });
});

// Get all pizza records
router.get("/music", (request, response) => {
  pizza.model.find({}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

// Get a pizza by ID
router.get("/musics/:id", (request, response) => {
  pizza.model.findById(request.params.id, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

// Delete a pizza by ID
router.delete("/musics/:id", (request, response) => {
  pizza.model.findByIdAndRemove(request.params.id, {}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

// Update a pizza by ID
router.put("/musics/:id", (request, response) => {
  const body = request.body;
  pizza.model.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        crust: body.crust,
        cheese: body.cheese,
        sauce: body.sauce,
        toppings: body.toppings
      }
    },
    (error, data) => {
      if (error) return response.sendStatus(500).json(error);
      return response.json(request.body);
    }
  );
});

module.exports = router;
