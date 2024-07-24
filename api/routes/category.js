const router = require("express").Router();
const Category = require("../models/Category.js");

// CREATE Category
router.post("/", async (req, res) => {
  const newCategory = new Category(req.body);
  try {
    const saveCategory = await newCategory.save();
    res.status(200).json(saveCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE Category
router.put("/:key", async (req, res) => {
  try {
    const category = await Category.findById(req.params.key);
    if (!category) return null;
    try {
      // todo
      const updatedCategory = await category.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedCategory);
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET Category BY Key
router.get("/:idTitle", async (req, res) => {
  try {
    const category = await Category.find({ idTitle: req.params.idTitle });
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
