"use strict";
const express = require("express");
const router = express.Router();
const cors = require('cors');

 const corsOptions = {
   origin: 'http://localhost:3001', // frontend URL
   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
   credentials: true // Allow cookies and authentication headers
 };

 router.use(cors(corsOptions));

 const jokesController = require("../controllers/jokes.controller");

 router.get("/jokebook/categories", jokesController.getAllCat);

 router.get("/jokebook/joke/:category", jokesController.getJokesByCat);

 router.get("/jokebook/random", gamesController.getRandomJoke);

 router.post("/jokebook/joke/add", jokesController.createNew);

 