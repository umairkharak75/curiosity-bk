const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Question = require('../../models/question');
const question = require('../../models/question');



// @route    QUESTION api/question
// @desc     Create a question
// @access   Public
router.post(
    '/:userId',
     [check('text', 'Text is required').not().isEmpty()],
    async (req, res) => {
        
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      try {
        const user = await User.findById(req.body.id).select('-password');
  
        const newQuestion = new Question({
          text: req.body.text, 
          user: req.params.userId
        });
  
        const question = await newQuestion.save();
  
        res.json(question);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );


  // @route    GET api/question 
// @desc     Get all questions
// @access   Public
router.get('/:id', async (req, res) => {
    
    try {
     // const question = await Question.find({user:req.body.user});
      question = await Question.find({});
      res.json(question);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });




module.exports = router;

