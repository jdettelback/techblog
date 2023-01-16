const router = require("express").Router();
const { Post } = require("../../models");
console.log("in post routes");

// CREATE new post
router.post("/", async (req, res) => {
  try {
    console.log("creating post");
    const dbPostData = await Post.create({
      title: req.body.title,
      body: req.body.body,
      user_id: req.session.user_id,
    });

      res.status(200).json(dbPostData);
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
