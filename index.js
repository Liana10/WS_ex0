'use strict';

var http = require('http');
var events = require('events');
var Hotel = require('./hotel_stars')

http.createServer(function (req, res) {
//create hotel instance and callback to events 
    var LianaHotel = new Hotel('LianaHotel');
    LianaHotel.on("rate", function() {
        console.log('Amount of stars: ' + LianaHotel.stars);
});

    // run some methods
    LianaHotel.positive_rate();
    LianaHotel.positive_rate();
    LianaHotel.positive_rate();
    LianaHotel.negative_rate();
    LianaHotel.negative_rate();


    res.writeHeader(200);
    res.end('Success\n')
}).listen(8080);

console.log('listening  on port 8080.....')