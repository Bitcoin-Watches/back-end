const router = require("express").Router();
const Auctions = require("../database_calls/auctions_model");

router.get("/", (req, res) => {
  Auctions.getAllAuctions()
    .catch((err) => res.send(err))
    .then((auctions) => {
      res.status(200).json(auctions);
    });
});

router.get("/:id", (req, res) => {
  let { id } = req.params;
  Auctions.findBy({ id })
    .catch((error) => {
      console.log("unique error", error);
      res.status(500).json(error);
    })
    .then((auctions) => {
      if (auctions.length === 0) {
        return res
          .status(404)
          .json({ message: `Could not find bid with the ID of ${id}` });
      }
      res.status(200).json(auctions[0]);
    });
});

router.post("/", async (req, res) => {
  const body = req.body;
  console.log("body", body);
  try {
    const auctions = await Auctions.addAuction(body);

    res.status(201).json(auctions);
  } catch (error) {
    res.status(500).json({ message: "Failed to add auction" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedAuction = await Auctions.removeAuction(id);

    if (deletedAuction) {
      res.status(201).json({ removed: deletedAuction });
    } else {
      res
        .status(404)
        .json({ message: "Could not find the auction with the given ID" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete auction" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  try {
    const update = await Auctions.updateAuction(id, changes);

    if (update) {
      res.status(201).json({ updateAuction: update });
    } else {
      res.status(404).json({ message: "Could not find auction with given ID" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update auction" });
  }
});

module.exports = router;
