"use strict";
const model = require("../models/games.model");

function getAllCat(req, res, next) {
  try {
    res.json(model.getAllCat());
  } catch (err) {
    console.error("Error while getting joke categories ", err.message);
    next(err);
  }
}

function getJokeByCat(req, res, next) {
    let catId = req.query.catId;
    if (catId) {
      try {
        res.json(model.getJokesByCat(catId));
      } catch (err) {
        console.error("Error while getting jokes: ", err.message);
        next(err);
      }
    }
    else {
      res.status(400).send("Invalid Request");
    }
}

function getRandomJoke(req, res, next) {
    try {
      res.json(model.getRandomJoke());
    } catch (err) {
      console.error("Error while getting random joke: ", err.message);
      next(err);
    }
  }

  function createNew(req, res, next) {
    let catId = req.body.catId;
    let setup = req.body.setup;
    let delivery = req.body.delivery;
  
    if (catId && setup && delivery) {
      let params = [catId, setup, delivery];
      try {
        res.json(model.createNew(params));
      } catch (err) {
        console.error("Error while creating joke: ", err.message);
        next(err);
      }
    }
    else {
      res.status(400).send("Invalid Request");
    }
  }

  module.exports = { 
    getAllCat,
    getJokeByCat,
    getRandomJoke,
    createNew
};