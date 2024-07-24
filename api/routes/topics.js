const router = require("express").Router();

const Topic = require("../models/Topics.js");

// CREATE Topic
router.post("/", async (req, res) => {
  const newSkill = new Topic(req.body);
  try {
    const saveSkill = await newSkill.save();
    res.status(200).json(saveSkill);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE Topic
router.put("/:key", async (req, res) => {
  try {
    const topic = await Topic.findById(req.params.key);
    if (!topic) return null;
    try {
      // todo
      const updatedTopic = await topic.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedTopic);
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET Topic BY Key
router.get("/:idTitle", async (req, res) => {
  try {
    const skill = await Topic.find({ idTitle: req.params.idTitle });
    res.status(200).json(skill);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET all skills
router.get("/", async (req, res) => {
  try {
    let topics;

    let query = {};

    if (req.query.category) {
      query.category = req.query.category;
    }

    if (req.query.limit) {
      topics = await Topic.find(query)
        .sort({ importance: -1 })
        .limit(req.query.limit);
    } else {
      topics = await Topic.find(query).sort({ importance: -1 });
    }

    res.status(200).json(topics);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
