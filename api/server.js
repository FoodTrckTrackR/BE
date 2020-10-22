const express = require("express");
const helmet = require("helmet");

const truckRouter = require("../router/truckRouter");
const dinerRouter = require("../router/dinerRouter");
const operatorRouter = require("../router/operatorRouter");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/trucks", truckRouter);
server.use("/api/diners", dinerRouter);
server.use("/api/operators", operatorRouter);

module.exports = server;
