const express = require("express");
const app = express();
const PORT = 4000;
app.get("/name/:user_name", function (req, res) {
  res.status(200);
  res.set("Content-Type", "text/html");
  res.send(
    "<html><body>" +
      "<h1>Hello" +
      req.params.user_name +
      "</h1>" +
      "</body></html>"
  );
});

app.get("*", function (req, res) {
  res.end("hello bouabid");
});
app.listen(PORT, function () {
  console.log(
    "The server is running," +
      "please open your browser at http://localhost:%s",
    PORT
  );
});
// app.listen(PORT, function (err) {
//   if (err) console.log('server not running');
//   else console.log("Calling app.listen's callback function.");
// });
app.all('/secret', function(req, res, next)
{console.log('Accessing the secret section...');
next();})
// app.get('/about', function(req, res){
//     res.send('about');
// });
// app.get('/random.text', function(req, res) {
//     res.send('random.text');
// });
app.set('view engine', 'Pug');
app.set('views', './views');
