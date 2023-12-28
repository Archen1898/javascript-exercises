const leapYears = function(num1) {

    if(num1%4 == 0){
        if(num1%100 == 0){
            if(num1%400 == 0) 
                return true;
            else
                return false;
        }
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
