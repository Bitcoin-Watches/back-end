const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const xss = require("xss-clean");
const cors = require("cors");

const watchesRouter = require("./api_calls/watches_router");

const server = express();

const limit = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests",
});

server.use(helmet());
server.use("/uploads", express.static("uploads"));
server.use(express.json({ limit: "20kb" }));
server.use(cors());
server.use(xss());
server.use(express.json());

//server.use("/api/auth", authRouter);
//server.use("/api/", limit, Router);
server.use("/", limit);
server.use("/watches", watchesRouter);

server.get("/", (req, res) => {
  res.send(`IT'S WORKING, IT'S WORKING!`);
});

module.exports = server;
