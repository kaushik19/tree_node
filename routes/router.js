'use strict';

const Story = require('../src/storyOps');
const express = require('express');
const router = express.Router();

var home;
var currentStory;

/**
 * Home Page
 */
router.get('/', function (req, res) {
  if (!home) home = new Story("Once upon a time, there was a big bad wolf.")
  currentStory = home;
  return res.render('layout', { currentStory: home });
});

/*
 * Add child into the node
*/
router.post('/submitStory', function (req, res) {
  const string = req.body.string;
  const option = req.body.option;
  const newStory = new Story(string);
  currentStory.addPath(newStory, option);
  return res.render('layout', { currentStory: currentStory });
});

/*
 * Get selected node and set it as center node
*/
router.post('/selectPath', function (req, res) {
  const option = req.body.option;
  currentStory = currentStory.getPath(option);
  return res.render('layout', { currentStory: currentStory });
});

module.exports = router;
