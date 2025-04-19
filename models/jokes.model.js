"use strict";
const db = require("./db-conn");

function getAllJokes() {
  let sql = "SELECT * FROM jokes;";
  const data = db.all(sql);
  return data;
}

function getAllCat() {
    let sql = "SELECT * FROM categories;";
    const data = db.all(sql);
    return data;
}

function getJokesByCat(catId) {
    const validColumns = getColumnNames();
    if (validColumns.includes(catId)) {
        let sql = "SELECT * FROM jokes WHERE catId =? ;";
        const data = db.all(sql, catId);
        return data;
  }
}

function getRandomJoke() {
    let sql = "SELECT * FROM jokes ORDER BY RANDOM() LIMIT 1;"
    const data = db.all(sql);
    return data;
}

function createNew(params) {
    let sql = "INSERT INTO jokes " +
      "(catId, setup, delivery) " +
      "VALUES(?, ?, ?, ?, ?, ?, ?); ";
    const info = db.run(sql, params);
    return info;
  }

module.exports = {
    getAllJokes,
    getAllCat,
    getJokesByCat,
    getRandomJoke,
    createNew
};