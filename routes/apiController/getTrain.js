var unirest = require('unirest');

module.exports = function(req, res, next) {
    var url = "http://api.railwayapi.com/between/source/" + req.params.src + "/dest/" + req.params.dst + "/date/" + req.params.dd + "-" + req.params.mm + "/apikey/cqjcc6945/";
    console.log(url);

    var dd={"error": "", "response_code": 200, "train": [{"dest_arrival_time": "11:00", "to": {"code": "MAS", "name": "CHENNAI CENTRAL"}, "classes": [{"available": "N", "class-code": "SL"}, {"available": "N", "class-code": "2A"}, {"available": "N", "class-code": "2S"}, {"available": "Y", "class-code": "CC"}, {"available": "N", "class-code": "3A"}, {"available": "Y", "class-code": "1A"}, {"available": "N", "class-code": "3E"}, {"available": "N", "class-code": "FC"}], "from": {"code": "SBC", "name": "BANGALORE CY JN"}, "travel_time": "05:00", "src_departure_time": "06:00", "days": [{"runs": "Y", "day-code": "MON"}, {"runs": "N", "day-code": "TUE"}, {"runs": "Y", "day-code": "WED"}, {"runs": "Y", "day-code": "THU"}, {"runs": "Y", "day-code": "FRI"}, {"runs": "Y", "day-code": "SAT"}, {"runs": "Y", "day-code": "SUN"}], "no": 1, "number": "12028", "name": "SBC-MAS SHATABDI EXP"}, {"dest_arrival_time": "12:15", "to": {"code": "MAS", "name": "CHENNAI CENTRAL"}, "classes": [{"available": "N", "class-code": "SL"}, {"available": "N", "class-code": "2A"}, {"available": "Y", "class-code": "2S"}, {"available": "Y", "class-code": "CC"}, {"available": "N", "class-code": "3A"}, {"available": "N", "class-code": "1A"}, {"available": "N", "class-code": "3E"}, {"available": "N", "class-code": "FC"}], "from": {"code": "SBC", "name": "BANGALORE CY JN"}, "travel_time": "05:45", "src_departure_time": "06:30", "days": [{"runs": "Y", "day-code": "MON"}, {"runs": "Y", "day-code": "TUE"}, {"runs": "Y", "day-code": "WED"}, {"runs": "Y", "day-code": "THU"}, {"runs": "Y", "day-code": "FRI"}, {"runs": "Y", "day-code": "SAT"}, {"runs": "Y", "day-code": "SUN"}], "no": 2, "number": "12608", "name": "LALBAGH EXP"}, {"dest_arrival_time": "14:30", "to": {"code": "MAS", "name": "CHENNAI CENTRAL"}, "classes": [{"available": "N", "class-code": "SL"}, {"available": "N", "class-code": "2A"}, {"available": "Y", "class-code": "2S"}, {"available": "Y", "class-code": "CC"}, {"available": "N", "class-code": "3A"}, {"available": "N", "class-code": "1A"}, {"available": "N", "class-code": "3E"}, {"available": "N", "class-code": "FC"}], "from": {"code": "SBC", "name": "BANGALORE CY JN"}, "travel_time": "06:30", "src_departure_time": "08:00", "days": [{"runs": "Y", "day-code": "MON"}, {"runs": "Y", "day-code": "TUE"}, {"runs": "Y", "day-code": "WED"}, {"runs": "Y", "day-code": "THU"}, {"runs": "Y", "day-code": "FRI"}, {"runs": "Y", "day-code": "SAT"}, {"runs": "Y", "day-code": "SUN"}], "no": 3, "number": "12610", "name": "SBC-MAS EXP"}, {"dest_arrival_time": "15:15", "to": {"code": "MAS", "name": "CHENNAI CENTRAL"}, "classes": [{"available": "Y", "class-code": "SL"}, {"available": "Y", "class-code": "2A"}, {"available": "N", "class-code": "2S"}, {"available": "N", "class-code": "CC"}, {"available": "Y", "class-code": "3A"}, {"available": "N", "class-code": "1A"}, {"available": "N", "class-code": "3E"}, {"available": "N", "class-code": "FC"}], "from": {"code": "SBC", "name": "BANGALORE CY JN"}, "travel_time": "06:15", "src_departure_time": "09:00", "days": [{"runs": "Y", "day-code": "MON"}, {"runs": "Y", "day-code": "TUE"}, {"runs": "Y", "day-code": "WED"}, {"runs": "Y", "day-code": "THU"}, {"runs": "Y", "day-code": "FRI"}, {"runs": "Y", "day-code": "SAT"}, {"runs": "Y", "day-code": "SUN"}], "no": 4, "number": "12295", "name": "SANGHAMITRA EXP"}, {"dest_arrival_time": "20:30", "to": {"code": "MAS", "name": "CHENNAI CENTRAL"}, "classes": [{"available": "N", "class-code": "SL"}, {"available": "N", "class-code": "2A"}, {"available": "N", "class-code": "2S"}, {"available": "Y", "class-code": "CC"}, {"available": "N", "class-code": "3A"}, {"available": "N", "class-code": "1A"}, {"available": "N", "class-code": "3E"}, {"available": "N", "class-code": "FC"}], "from": {"code": "SBC", "name": "BANGALORE CY JN"}, "travel_time": "06:00", "src_departure_time": "14:30", "days": [{"runs": "Y", "day-code": "MON"}, {"runs": "Y", "day-code": "TUE"}, {"runs": "Y", "day-code": "WED"}, {"runs": "Y", "day-code": "THU"}, {"runs": "Y", "day-code": "FRI"}, {"runs": "Y", "day-code": "SAT"}, {"runs": "Y", "day-code": "SUN"}], "no": 5, "number": "22626", "name": "SBC-MAS AC DOUBLE DECKER"}, {"dest_arrival_time": "21:05", "to": {"code": "MAS", "name": "CHENNAI CENTRAL"}, "classes": [{"available": "N", "class-code": "SL"}, {"available": "N", "class-code": "2A"}, {"available": "Y", "class-code": "2S"}, {"available": "N", "class-code": "CC"}, {"available": "N", "class-code": "3A"}, {"available": "N", "class-code": "1A"}, {"available": "N", "class-code": "3E"}, {"available": "N", "class-code": "FC"}], "from": {"code": "SBC", "name": "BANGALORE CY JN"}, "travel_time": "06:05", "src_departure_time": "15:00", "days": [{"runs": "Y", "day-code": "MON"}, {"runs": "Y", "day-code": "TUE"}, {"runs": "Y", "day-code": "WED"}, {"runs": "Y", "day-code": "THU"}, {"runs": "Y", "day-code": "FRI"}, {"runs": "Y", "day-code": "SAT"}, {"runs": "Y", "day-code": "SUN"}], "no": 6, "number": "12640", "name": "SBC-MAS BRINDAVAN EXP"}, {"dest_arrival_time": "04:45", "to": {"code": "MAS", "name": "CHENNAI CENTRAL"}, "classes": [{"available": "Y", "class-code": "SL"}, {"available": "Y", "class-code": "2A"}, {"available": "N", "class-code": "2S"}, {"available": "N", "class-code": "CC"}, {"available": "Y", "class-code": "3A"}, {"available": "Y", "class-code": "1A"}, {"available": "N", "class-code": "3E"}, {"available": "N", "class-code": "FC"}], "from": {"code": "SBC", "name": "BANGALORE CY JN"}, "travel_time": "06:05", "src_departure_time": "22:40", "days": [{"runs": "Y", "day-code": "MON"}, {"runs": "Y", "day-code": "TUE"}, {"runs": "Y", "day-code": "WED"}, {"runs": "Y", "day-code": "THU"}, {"runs": "Y", "day-code": "FRI"}, {"runs": "Y", "day-code": "SAT"}, {"runs": "Y", "day-code": "SUN"}], "no": 7, "number": "12658", "name": "SBC-MAS MAIL"}, {"dest_arrival_time": "05:15", "to": {"code": "MAS", "name": "CHENNAI CENTRAL"}, "classes": [{"available": "Y", "class-code": "SL"}, {"available": "Y", "class-code": "2A"}, {"available": "N", "class-code": "2S"}, {"available": "N", "class-code": "CC"}, {"available": "Y", "class-code": "3A"}, {"available": "N", "class-code": "1A"}, {"available": "N", "class-code": "3E"}, {"available": "N", "class-code": "FC"}], "from": {"code": "SBC", "name": "BANGALORE CY JN"}, "travel_time": "06:15", "src_departure_time": "23:00", "days": [{"runs": "N", "day-code": "MON"}, {"runs": "N", "day-code": "TUE"}, {"runs": "Y", "day-code": "WED"}, {"runs": "N", "day-code": "THU"}, {"runs": "N", "day-code": "FRI"}, {"runs": "N", "day-code": "SAT"}, {"runs": "N", "day-code": "SUN"}], "no": 8, "number": "22681", "name": "MYS-MAS EXPRESS"}, {"dest_arrival_time": "06:05", "to": {"code": "MAS", "name": "CHENNAI CENTRAL"}, "classes": [{"available": "Y", "class-code": "SL"}, {"available": "Y", "class-code": "2A"}, {"available": "N", "class-code": "2S"}, {"available": "N", "class-code": "CC"}, {"available": "Y", "class-code": "3A"}, {"available": "N", "class-code": "1A"}, {"available": "N", "class-code": "3E"}, {"available": "N", "class-code": "FC"}], "from": {"code": "BNC", "name": "BANGALORE CANT"}, "travel_time": "06:25", "src_departure_time": "23:40", "days": [{"runs": "N", "day-code": "MON"}, {"runs": "N", "day-code": "TUE"}, {"runs": "Y", "day-code": "WED"}, {"runs": "Y", "day-code": "THU"}, {"runs": "Y", "day-code": "FRI"}, {"runs": "N", "day-code": "SAT"}, {"runs": "N", "day-code": "SUN"}], "no": 9, "number": "12509", "name": "SBC -GHY EXP"}, {"dest_arrival_time": "07:00", "to": {"code": "MAS", "name": "CHENNAI CENTRAL"}, "classes": [{"available": "Y", "class-code": "SL"}, {"available": "Y", "class-code": "2A"}, {"available": "N", "class-code": "2S"}, {"available": "N", "class-code": "CC"}, {"available": "Y", "class-code": "3A"}, {"available": "N", "class-code": "1A"}, {"available": "N", "class-code": "3E"}, {"available": "N", "class-code": "FC"}], "from": {"code": "SBC", "name": "BANGALORE CY JN"}, "travel_time": "07:15", "src_departure_time": "23:45", "days": [{"runs": "Y", "day-code": "MON"}, {"runs": "Y", "day-code": "TUE"}, {"runs": "Y", "day-code": "WED"}, {"runs": "Y", "day-code": "THU"}, {"runs": "Y", "day-code": "FRI"}, {"runs": "Y", "day-code": "SAT"}, {"runs": "Y", "day-code": "SUN"}], "no": 10, "number": "16022", "name": "MYS-MAS KAVERI EXPRESS"}, {"dest_arrival_time": "09:30", "to": {"code": "MAS", "name": "CHENNAI CENTRAL"}, "classes": [{"available": "Y", "class-code": "SL"}, {"available": "Y", "class-code": "2A"}, {"available": "N", "class-code": "2S"}, {"available": "N", "class-code": "CC"}, {"available": "Y", "class-code": "3A"}, {"available": "N", "class-code": "1A"}, {"available": "N", "class-code": "3E"}, {"available": "N", "class-code": "FC"}], "from": {"code": "YPR", "name": "YASVANTPUR JN"}, "travel_time": "09:35", "src_departure_time": "23:55", "days": [{"runs": "N", "day-code": "MON"}, {"runs": "N", "day-code": "TUE"}, {"runs": "Y", "day-code": "WED"}, {"runs": "N", "day-code": "THU"}, {"runs": "N", "day-code": "FRI"}, {"runs": "N", "day-code": "SAT"}, {"runs": "N", "day-code": "SUN"}], "no": 11, "number": "15227", "name": "YPR-MFP EXP"}], "total": 11};
    for (var i in dd.train) {
        for (var j in dd.train[i].classes) {
            if (dd.train[i].classes[j].available == "Y") {
                dd.train[i].classes[j]["fare"] = Math.floor(Math.random() * (500 - 100) + 100);
            }
        }
    }
    res.send(dd);
    // unirest.get(url).header('Accept', 'application/json').end(function(response) {
    //     if (response.body.response_code == 200){
    //         for (var i in response.body.train) {
    //             for (var j in response.body.train[i].classes) {
    //                 if (response.body.train[i].classes[j].available == "Y") {
    //                     response.body.train[i].classes[j]["fare"] = Math.floor(Math.random() * (500 - 100) + 100);
    //                 }
    //             }
    //         }
    //         res.send(response.body);
    //     }
    //     else {
    //         var err = new Error();
    //         next(err);
    //     }
    // });
}