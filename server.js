const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const xss = require("xss-clean");
const cors = require("cors");

// const authenticate = require('../auth/authenticate-middleware.js')
// const authRouter = require('../auth/auth-router.js')
// const Router = require("..//-router.js");
const watchesRouter = require("./api_calls/watches_router");
const biddersRouter = require("./api_calls/users_router");
const bidsRouter = require("./api_calls/bids_router");
const auctionsRouter = require("./api_calls/auctions_router");

const server = express();

const limit = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests",
});

server.use(helmet());
server.use(express.json({ limit: "20kb" }));
server.use(cors());
server.use(xss());
server.use(express.json());

//server.use("/api/auth", authRouter);
//server.use("/api/", limit, Router);
server.use("/", limit);
server.use("/watches", watchesRouter);
server.use("/bidders", biddersRouter);
server.use("/bids", bidsRouter);
server.use("/auctions", auctionsRouter);

server.get("/", (req, res) => {
  res.send(`IT'S WORKING, IT'S WORKING!`);
});

module.exports = server;
