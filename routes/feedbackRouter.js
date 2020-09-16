const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var authenticate = require("../authenticate");
const Feedback = require("../models/feedback");
const cors = require("./cors");
const feedbackRouter = express.Router();

feedbackRouter.use(bodyParser.json());

feedbackRouter
  .route("/")
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200);
  })

  .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    const feedback = new Feedback(req.body);
    feedback
      .save()
      .then((feedback) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({message: "Your feedback has been sent" });
      })
      .catch((err) => {
        return next(err);
      });
  });

module.exports = feedbackRouter;
