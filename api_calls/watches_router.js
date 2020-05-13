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
module.exports = router;
