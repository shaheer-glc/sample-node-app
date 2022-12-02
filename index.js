var express = require('express');
 
var app = express();
var calc = 2;
app.get('/', function (req, res) {
 res.send("Green Lambda code task");
});
app.listen(3000, () => {
    console.log("App started on port 3000")
}); 
module.exports = app;
