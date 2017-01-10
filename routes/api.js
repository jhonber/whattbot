var request = require('request');

module.exports = function (app, bot_token) {
  var url_tel = 'https://api.telegram.org/bot' + bot_token + '/';
  var sendMessage = url_tel + 'sendMessage';
  var last = 0;

  app.post('/:token', function (req, res) {
    var update_id = parseInt(req.body.update_id);
    if (update_id > last) {
      last = update_id;
      var token = req.param('token');

      if (bot_token == token) {
        console.log('message: ', req.body);

        var chat_id = parseInt(req.body.message.chat.id);
        var text = 'Hello my friend ' + req.body.message.from.first_name;
        var data = {'chat_id': chat_id, 'text': text};

        request.post({url: sendMessage, form: data}, function (err, httpResponse, body) {
          if (err) console.log('Error: ', err);
          else {
            console.log("Response: ", body);
          }

          res.json(200, {ok: true});
        });
      }
      else {
        res.json(500, {ok: false});
      }
    }
    else {
      res.json(500, {ok: false});
    }
  });
}
