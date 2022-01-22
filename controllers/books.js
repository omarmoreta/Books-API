const router = require("express").Router();
const db = require("../models");

// GET /books/seed to insert the array of books to the database
// router.get("/seed", (req, res) => {
//   db.Books.insertMany([
//     {
//       title: "The Shinobi Initiative",
//       description:
//         "The reality-bending adventures of a clandestine service agency in the year 2166",
//       year: 2014,
//       quantity: 10,
//       imageURL: "https://imgur.com/LEqsHy5.jpeg",
//     },
//     {
//       title: "Tess the Wonder Dog",
//       description: "The tale of a dog who gets super powers",
//       year: 2007,
//       quantity: 3,
//       imageURL: "https://imgur.com/cEJmGKV.jpg",
//     },
//     {
//       title: "The Annals of Arathrae",
//       description:
//         "This anthology tells the intertwined narratives of six fairy tales.",
//       year: 2016,
//       quantity: 8,
//       imageURL: "https://imgur.com/VGyUtrr.jpeg",
//     },
//     {
//       title: "W∀RP",
//       description:
//         "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
//       year: 2010,
//       quantity: 4,
//       imageURL: "https://imgur.com/qYLKtPH.jpeg",
//     },
//   ])
//     .then(
//       res.status(200).json({
//         message: "Seed successful",
//       })
//     )
//     .catch(
//       res.status(400).json({
//         message: "Seed unsuccessful",
//       })
//     );
// });

// GET /books to get all books
router.get("/", async (req, res) => {
  try {
    const books = await db.Books.find().orFail();
    res.json(books);
  } catch (error) {
    res.status(400).send(error).json({ message: "BOOKS WERE NOT FOUND" });
  }
});

// GET /books/:id to get a book
router.get("/:id", async (req, res) => {
  try {
    const book = await db.Books.findById(req.params.id).orFail();
    res.json(book);
  } catch (error) {
    res.status(400).send(error).json({ message: "BOOK WAS NOT FOUND" });
  }
});

// POST /books to create a book
router.post("/", async (req, res) => {
  try {
    const book = await db.Books.create(req.body);
    res.json(book);
  } catch (error) {
    res.status(400).send(error).json({ message: "BOOK WAS NOT CREATED" });
  }
});

// PUT /books/:id to update a book
router.put("/:id", async (req, res) => {
  try {
    const book = await db.Books.updateOne(
      { _id: req.params.id },
      req.body
    ).orFail();
    res.json(book);
  } catch (error) {
    res.status(400).send(error).json({ message: "BOOK WAS NOT UPDATED" });
  }
});

// DELETE /books/:id to delete a book
router.delete("/:id", async (req, res) => {
  try {
    const book = await db.Books.deleteOne({ _id: req.params.id }).orFail();
    res.json({ message: "Book was deleted" });
  } catch (error) {
    res.status(400).send(error).json({ message: "BOOK WAS NOT DELETED" });
  }
});

module.exports = router;
