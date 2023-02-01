const router = require("express").Router();
const { Comment } = require("../../models");
console.log("in comment routes");

// CREATE new comment
router.post("/", async (req, res) => {
  try {
    console.log("creating comment");
    const dbCommentData = await Comment.create({
      body: req.body.body,
      user_id: req.session.user_id,
      post_id: req.body.id,
    });

    res.status(200).json(dbCommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// update comment
router.put("/:id", async (req, res) => {
  try {
    const updatedComment = await Comment.update(
      {
         body: req.body.body
      },
      {
      where: {
        id: req.params.id,
      },
    });
    if (!updatedComment[0]) {
      res.status(404).json({ message: "No comment with this id" });
      return;
    }
    res.status(200).json(updatedComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete comment
router.delete("/:id", async (req, res) => {
  try {
    const postData = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!postData) {
      res.status(404).json({ message: "No comment found with this id" });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
