const {Router} = require('express');
const Comment = require('../models/Comment')
const router = Router();

router.get('/', async (req, res) => {
  try {
    const tests = await Comment.find({});
    res.json(tests);
  } catch (e) {
    res.status(500).json({message: 'Something went wrong'});
  }
})

router.post('/', async (req, res) => {
  try {
    const {name, text, date} = req.body;

    const exist = await Comment.findOne({date})
    if (exist) {
      res.status(400).json({message: 'Such a comment already exists'});
    }

    const comment = new Comment({name, text, date});
    await comment.save();

    res.status(201).json({message: 'Comment created'})
  } catch (e) {
    res.status(500).json({message: 'Something went wrong'});
  }
})

module.exports = router;