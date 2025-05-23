CREATE TABLE "categories" {
"catId" INTEGER PRIMARY KEY AUTOINCREMENT,
"catName" TEXT NOT NULL UNIQUE
};

CREATE TABLE "jokes" {
"jokeId" INTEGER PRIMARY KEY AUTOINCREMENT,
"catId" INTEGER NOT NULL,
"setup" TEXT NOT NULL,
"delivery" TEXT NOT NULL,
FOREIGN KEY("catID") REFERENCES "categories"("catId")
};