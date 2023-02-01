const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");
console.log("in post routes");

// CREATE new post
router.post("/", withAuth, async (req, res) => {
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

//update post
router.put("/:id", withAuth, async (req, res) => {
  try {
    const updatedPost = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!updatedPost[0]) {
      res.status(404).json({ message: "No post with this id" });
      return;
    }
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete post
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!postData) {
      res.status(404).json({ message: "No posts found with this id" });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
