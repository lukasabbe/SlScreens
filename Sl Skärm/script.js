const express = require("express");
const app = new express();
const router = express.Router();
const path = require("path");
const request = require("request")

router.get("/getInfo",function ( req, res, next ){
    request.get("https://api.sl.se/api2/realtimedeparturesV4.json?key=b961c98c210b49519c8824f7b60c0831&siteid=3404&timewindow=60", async function(err, rep, body){
        res.json(body);
    })
})
router.get("/",function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})
router.get('/slget.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/slget.js'));
});
router.get('/style.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/style.css'));
});

app.use("/",router);
app.listen(3000);
//https://api.sl.se/api2/realtimedeparturesV4.json?key=b961c98c210b49519c8824f7b60c0831&siteid=9192&timewindow=10
  /*
      var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log(this.response)
    }
    xhttp.open("GET","https://api.sl.se/api2/realtimedeparturesV4.json?key=b961c98c210b49519c8824f7b60c0831&siteid=9192&timewindow=10", true);
    xhttp.setRequestHeader("Content-type", "application/json")
  */