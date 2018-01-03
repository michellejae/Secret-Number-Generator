'use strict';
module.exports = function() {
        let num = Math.random()*1000
        let secretNumber = function (){
            return num
        }
        return secretNumber
};