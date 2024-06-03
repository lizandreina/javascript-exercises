const removeFromArray = function(...theArgs) {
    
    let insideArray = theArgs[0];
    let outsideArray = theArgs.slice(1);

    const finalArray = [];

    outer:
    for (let i = 0; i < insideArray.length; i++) {
        for (let j = 0; j < outsideArray.length; j++) {
            if (insideArray[i] === outsideArray[j]) continue outer;
        }
    finalArray.push(insideArray[i]);
    }
    return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;

// Slice values between the array and the ones inside the array and create a variable for each of them
// If values arguments in the array outside equal the ones in the inside, delete them from both
// Remove any values missing in the array outside