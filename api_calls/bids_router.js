const router = require("express").Router();
const Bids = require("../database_calls/bids_model");

router.get("/", (req, res) => {
  Bids.getAllBids()
    .catch((err) => res.send(err))
    .then((bids) => {
      res.status(200).json(bids);
    });
});

router.get("/:id", (req, res) => {
  let { id } = req.params;
  Bids.findBy({ id })
    .catch((error) => {
      console.log("unique error", error);
      res.status(500).json(error);
    })
    .then((bids) => {
      if (bids.length === 0) {
        return res
          .status(404)
          .json({ message: `Could not find bid with the ID of ${id}` });
      }
      res.status(200).json(bids[0]);
    });
});

router.post("/", async (req, res) => {
  const body = req.body;

  try {
    const bidder = await Bids.addBid(body);

    res.status(201).json(bidder);
  } catch (error) {
    res.status(500).json({ message: "Failed to add bid" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBid = await Bids.deleteBid(id);
    const editedBids = await Bids.getAllBids();

    if (deletedBid) {
      res.json(editedBids);
    } else {
      res
        .status(404)
        .json({ message: "Could not find the bid with the given ID" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete bid" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  try {
    const update = await Bidders.updateBidder(id, changes);

    if (update) {
      res.json({ updateBidder: update });
    } else {
      res.status(404).json({ message: "Could not find auction with given ID" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update auction" });
  }

  // try {
  //   const bidID = await Bids.updateBidder(id);

  //   if (bidID) {
  //     const updatedBid = await Bids.updateBidder(changes, id);
  //     res.status(200).json(updatedBid);
  //   } else {
  //     res.status(404).json({ message: "Could not find bid with given ID" });
  //   }
  // } catch (error) {
  //   res.status(500).json({ message: "Failed to update bid" });
  // }
});

module.exports = router;
