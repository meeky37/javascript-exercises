const leapYears = function(year) {
    if ((year % 4 == 0 && year % 100 != 0) ||  (year % 100 == 0 && year % 400 ==0)){
        return true;
    }
    return false;

};

// Can improve on this by using const for each of the conditions. Why comment if your variables tell you the story?

// Do not edit below this line
module.exports = leapYears;
