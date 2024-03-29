// Added express dependency
const express = require('express');
const router = express.Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    const { title, description } = req.body;
    try {
        const user = await User.findByPk(req.session.user_id);
        if (!user) {
            return res.sendStatus(401);
        } 
        const newPost = await Post.create({
            title,
            description,
            userId: user.id,
        });
        res.status(200).json(newPost);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                userId: req.session.user_id
            }
        });
        if (!postData) {
            return res.status(404).json({ message: 'No post found with this id!' });
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;