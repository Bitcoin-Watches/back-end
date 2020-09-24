const router = require("express").Router();
const Watches = require("../database_calls/watches_model");

router.get("/", (req, res) => {
  Watches.getAllWatches()
    .catch((err) => res.send(err))
    .then((watches) => {
      res.status(200).json(watches);
    });
});

router.get("/:id", (req, res) => {
  let { id } = req.params;
  Watches.findBy({ id })
    .catch((error) => {
      console.log("unique error", error);
      res.status(500).json(error);
    })
    .then((watches) => {
      if (watches.length === 0) {
        return res
          .status(404)
          .json({ message: `Could not find celeb with the ID of ${id}` });
      }
      res.status(200).json(watches[0]);
    });
});

router.post("/", async (req, res) => {
  const body = req.body;

  try {
    const watch = await Watches.addWatches(body);

    res.status(201).json(watch);
  } catch (error) {
    res.status(500).json({ message: "Failed to add watch" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Watches.deleteWatch(id);
    const editedWatch = await Watches.getAllWatches();

    if (deleted) {
      res.json(editedWatch);
    } else {
      res
        .status(404)
        .json({ message: "Could not find the watch with the given ID" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete watch" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  try {
    const update = await Watches.updateWatch(id, changes);

    if (update) {
      res.status(201).json({ updateWatch: update });
    } else {
      res.status(404).json({ message: "Could not find bidder with given ID" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update bidder" });
  }
});

module.exports = router;
