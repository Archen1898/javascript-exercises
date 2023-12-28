const removeFromArray = function(...argument) {
    let array = argument[0];

    for(let j = 1; j<arguments.length; j++){
        let numToRemove = arguments[j];
        for(let i=0; i<array.length; i++){
            if(array[i]==numToRemove && typeof(numToRemove)==typeof(array[i])){
                array.splice(i,1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
