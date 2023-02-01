const router = require("express").Router();
const { Post, Comment, User } = require("../models");
const withAuth = require("../utils/auth");

//get all posts
router.get("/", async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);

    // Pass serialized data and session flag into template
    res.render("homepage", {
    
      posts,
      logged_in: req.session.loggedIn,
    
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//get a post
router.get("/post/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const commentData = await Comment.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
      where: {
        post_id: req.params.id,
      },
    });

    const post = postData.get({ plain: true });
    const comments = commentData.map((comment) => comment.get({ plain: true }));

    if (post.user_id == req.session.user_id) {
      res.render("post", {
        ...post,
        comments: comments,
        logged_in: req.session.loggedIn,
      });
    } else {
      res.render("read-post", {
        ...post,
        comments: comments,
        logged_in: req.session.loggedIn,
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//get comments
router.get("/comment/:post_id/:comment_id", withAuth, async (req, res) => {
  try {
    if (req.params.comment_id != "new") {
      const commentData = await Comment.findByPk(req.params.comment_id);

      const comment = commentData.get({ plain: true });
      
      if (req.session.user_id == comment.user_id) {
        res.render("edit-comment", {
          ...comment,
          logged_in: true,
        });
      } else {
        res.redirect("/post/"+req.params.post_id);
        return;
      }
    } else {
      res.render("add-comment", {
        post_id: req.params.post_id,
        logged_in: true,
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render("dashboard", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

module.exports = router;
