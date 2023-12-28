const repeatString = function(phrase, repetitons) {
    let newPhrase = "";
    
    if(repetitons<0)
        return 'ERROR';
    
    for(let i =0; i<repetitons; i++){
        newPhrase = newPhrase + phrase;
    }
    
    return newPhrase;
};

// Do not edit below this line
module.exports = repeatString;
