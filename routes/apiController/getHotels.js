var unirest = require('unirest');
var cityList = require('../../public/json/city_list.json');

module.exports = function(req, res, next) {
    var code = ""
    for (var i in cityList) {
        if (cityList[i].city.toLowerCase() == req.params.dst.toLowerCase()) {
            code = cityList[i].code;
            break;
        }
    }

    var url = "http://www.redbus.in/hotels/api/search/data?destId=" + code + "&checkIn=" + req.params.ci + "&checkOut=" + req.params.co + "&noOfAdults=1&noOfRooms=1&noOfChildren=0&childrenAge1=0&childrenAge2=0";
    console.log(url);

    unirest.get(url).header('Accept', 'application/json').end(function(response) {
        if (response.body.status == 200)
            res.send(response.body);
        else {
            err = new Error();
            err.status = '400';
            err.message = 'search data not available';
            next(err);
        }
    });
}