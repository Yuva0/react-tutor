const router = require("express").Router();

const Topic = require("../models/TopicReferences.js");

// CREATE Topic References
router.post("/", async (req, res) => {
  const newTopicReference = new Topic(req.body);
  try {
    const saveTopicReference = await newTopicReference.save();
    res.status(200).json(saveTopicReference);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE Topic
router.put("/:idTitle", async (req, res) => {
  try {
    const topic = await Topic.findById(req.params.idTitle);
    if (!topic) {
      return res.status(404).json({ message: "Topic not found" });
    }
    const updatedTopic = await Topic.findByIdAndUpdate(
      { idTitle: req.params.idTitle },
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedTopic);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET Topic BY Key
router.get("/:idTitle", async (req, res) => {
  try {
    const TopicReference = await Topic.find({ idTitle: req.params.idTitle });
    res.status(200).json(TopicReference);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET all TopicReferences
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
