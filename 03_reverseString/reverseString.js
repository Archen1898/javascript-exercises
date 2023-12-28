const reverseString = function(aString) {

    if(aString.length == 0)
        return "";
    
    let arrayString = aString.split(" ");
    let completedString = "";


    for(let i = aString.length-1; i>=0; i--){
        completedString = completedString + aString.charAt(i);
    }
    return completedString;
   
};

// Do not edit below this line
module.exports = reverseString;
