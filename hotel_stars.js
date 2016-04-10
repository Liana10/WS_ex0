'use strict';

var EventEmitter = require('events');

module.exports = class Hotel extends EventEmitter {
    constructor(hotel_name){ 
        super();
        this.name = hotel_name;
        this.stars = 0;
        this.category = 'boutique'
    }

    negative_rate() {
        if (this.stars==0){
            console.log('The negative rate limit is 0 stars')
        }
        else{
            this.stars--;
            console.log('Negative rate');
            this.emit('rate');
        }
    }

    positive_rate() {
        if (this.stars==5){
            console.log('The positive rate limit is 5 stars')
        }
        else{
            this.stars++;
            console.log('Positive rate');
            this.emit('rate');
        }
    }
}