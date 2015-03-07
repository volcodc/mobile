module.exports = function(app) {
  var express = require('express');
  var storiesRouter = express.Router();

  storiesRouter.get('/', function(req, res) {
    res.send({
      'stories': [
        { id: "1", headline: 'poop', body: 'it stinks!' },
        { id: "2", headline: 'shit', body: 'it also stinks!' },
        { id: "3", headline: 'roses', body: 'mmmmm!' },
        { id: "4", headline: 'poopy', body: 'it stinks!' },
        { id: "5", headline: 'pee pee', body: 'it also stinks!' },
        { id: "6", headline: 'dog puke', body: 'mmmmm it tastes great!' }
      ]
    });
  });

  storiesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  storiesRouter.get('/:id', function(req, res) {
    res.send({
      'stories': {
        id: req.params.id
      }
    });
  });

  storiesRouter.put('/:id', function(req, res) {
    res.send({
      'stories': {
        id: req.params.id
      }
    });
  });

  storiesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/stories', storiesRouter);
};
