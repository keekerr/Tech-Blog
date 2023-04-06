const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
  } else {
    res.render('homepage');
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user_id, { include: [{ model: Post, as: 'posts' }] });
    res.render('profile', {
      user: user.toJSON(),
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
  } else {
    res.render('login');
  }
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
  } else {
    res.render('signup');
  }
});

router.get('/profile/:id', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id, { include: [{ model: User, as: 'user' }] });
    if (!post) {
      res.status(404).json({ message: 'No post with this id!' });
    } else {
      res.render('post', { post: post.toJSON() });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;