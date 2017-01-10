
module.exports = function (app) {
  app.get('/', function (req, res) {
    res.send("WhattBot: I'm here :P")
  });
}
