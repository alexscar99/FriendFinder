var friends = require('../data/friends');

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.json(friends);
  });

  app.post('/api/friends', function(req, res) {
    var answersObject = {};
    // grab every answer array from object
    for (var i = 0; i < friends.length; i++) {
      var surveyAnswers = friends[i].answers;
      var userNumber = 'User ' + (i + 1);
      answersObject[userNumber] = surveyAnswers;
    }

    console.log(answersObject);

    // loop through object

    // subtract new array from each one

    // find total difference

    // lowest difference = match

    friends.push(req.body);
    res.json(true);

    // for (var surveyAnswers in answersObject) {
    //   if (Math.abs(req.body.answers[i] - friends[] )) {

    //   }
    // }
  });
};
