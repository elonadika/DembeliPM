var express = require('express');
var router = express.Router();
var https = require("https");


/* GET home page. */
router.get('/', function (req, res) {
    
    var opts = {
        host: "api.github.com",
        path: "/repos/dembeli/dembelipm/contributors",
        method: "GET",
        headers : {
            "User-Agent": "Dembeli Project Management"
        }
    }  

    https.get(opts, function (response) {
        
        var buffer = "", 
            data;
        
        response.on("data", function (chunk) {
            buffer += chunk;
        });
        
        response.on("end", function (err) {            
            //console.log(buffer);
            //console.log("\n");
            data = JSON.parse(buffer);
            res.render('index', {
                title: 'Dembeli Project Management', 
                description: "Designed for Software Engineering projects!", 
                contributors : data
            });
        
        });
    });    
});

module.exports = router;