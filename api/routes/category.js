const router = require("express").Router();
const Category = require("../models/Category.js");

// CREATE Category
router.post("/", async (req, res) => {
  const newCategory = new Category(req.body);
  try {
    const savedCategory = await newCategory.save();
    res.status(200).json(savedCategory);
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error
      res.status(400).json({ message: "Duplicate key error", error });
    } else {
      console.log(error);
      res.status(500).json({ message: "Server error", error });
    }
  }
});

// UPDATE Category using category id
router.put("/:idCategory", async (req, res) => {
  try {
    const category = await Category.findOne({ idCategory: req.params.idCategory });
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    const updatedCategory = await Category.findOneAndUpdate(
      { idCategory: req.params.idCategory },
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET Category BY Key
router.get("/:idCategory", async (req, res) => {
  try {
    const category = await Category.find({ idCategory: req.params.idCategory });
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET all categories
router.get("/", async (req, res) => {
  try {
    let categories;

    let query = {};

    if (req.query.category) {
      query.category = req.query.category;
    }

    if (req.query.limit) {
      categories = await Category.find(query).limit(parseInt(req.query.limit));
    } else {
      categories = await Category.find(query);
    }

    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
