'use strict';

const Story = require('../src/storyOps');
const express = require('express');
const router = express.Router();

var home;
var currentStory;

const defaultSetter = () => {
  if (!home) home = new Story("Once upon a time, there was a big bad wolf.");
  currentStory = home;
};

/**
 * Home Page
 */
router.get('/', function (req, res) {
  defaultSetter();
  return res.render('index', { currentStory: home });
});

/*
 * Add child into the node
*/
router.post('/story', function (req, res) {
  if (!req.body || !req.body.string || !req.body.option || !currentStory) {
    defaultSetter();
    return res.render('index', { currentStory: home });    
  }
  const string = req.body.string;
  const option = req.body.option;
  const newStory = new Story(string);
  currentStory.addPath(newStory, option);
  return res.render('index', { currentStory: currentStory });
});

/*
 * Get selected node and set it as center node
*/
router.post('/path', function (req, res) {
  if (!req.body || !req.body.option || !currentStory) {
    defaultSetter();
    return res.render('index', { currentStory: home });    
  }
  const option = req.body.option;
  currentStory = currentStory.getPath(option);
  return res.render('index', { currentStory: currentStory });
});



module.exports = router;
