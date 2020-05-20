const router = require("express").Router();
const Bidders = require("../database_calls/users_model");

router.get("/", (req, res) => {
  Bidders.getAllBidders()
    .catch((err) => res.send(err))
    .then((bidders) => {
      res.status(200).json(bidders);
    });
});

router.get("/:id", (req, res) => {
  let { id } = req.params;
  Bidders.findBy({ id })
    .catch((error) => {
      console.log("unique error", error);
      res.status(500).json(error);
    })
    .then((bidders) => {
      if (bidders.length === 0) {
        return res
          .status(404)
          .json({ message: `Could not find bidder with the ID of ${id}` });
      }
      res.status(200).json(bidders[0]);
    });
});

router.post("/", async (req, res) => {
  const body = req.body;

  try {
    const bidder = await Bidders.addBidder(body);

    res.status(201).json(bidder);
  } catch (error) {
    res.status(500).json({ message: "Failed to add bidder" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBidder = await Bidders.deleteBidder(id);
    const editedBidder = await Bidders.getAllBidders();

    if (deletedBidder) {
      res.json(editedBidder);
    } else {
      res
        .status(404)
        .json({ message: "Could not find the bidder with the given ID" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete bidder" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  // try {
  //   const bidderID = await Bidders.findBy(id);

  //   if (bidderID) {
  //     const updatedBidder = await Bidders.updateBidder(changes, id);
  //     res.status(200).json(updatedBidder);
  //   } else {
  //     res.status(404).json({ message: "Could not find bidder with given ID" });
  //   }
  // } catch (error) {
  //   res.status(500).json({ message: "Failed to update bidder" });
  // }

  try {
    const update = await Bidders.updateBidder(id, changes);

    if (update) {
      res.status(201).json({ updateBidder: update });
    } else {
      res.status(404).json({ message: "Could not find bidder with given ID" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update bidder" });
  }
});

module.exports = router;
