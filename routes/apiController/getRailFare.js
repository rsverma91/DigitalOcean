var unirest = require('unirest');

module.exports = function(req, res, next) {
    var url = "http://api.railwayapi.com/fare/train/"+ req.params.tno +"/source/"+ req.params.src +"/dest/"+ req.params.dst +"/age/18/quota/GN/doj/"+ req.params.doj +"/apikey/cqjcc6945/";
    console.log(url);
    var dd={ "train": { "name": "CHENNAI EXPRESS", "number": "12610" }, "response_code": 200, "quota": { "code": "GN", "name": "GENERAL QUOTA" }, "fare": [{ "code": "CC", "name": "AC CHAIR CAR", "fare": "540" }, { "code": "2S", "name": "SECOND SEATING", "fare": "150" }], "from": { "code": "SBC", "name": "BANGALORE CY JN" }, "to": { "code": "MAS", "name": "CHENNAI CENTRAL" }, "failure_rate": 14.634146341463413 };
    res.send(dd);
    // unirest.get(url).header('Accept', 'application/json').end(function(response) {
        // if(response.body.response_code == 200)
        //     res.send(response.body);
        // else{
        //      var err= new Error();
        //      next(err);
        //  }
    // });
}