const sumAll = function(first, last) {
    let finalSum = 0;
    
    if (first > 0 && last > 0 && typeof first === "number" && typeof last === "number") {
        if (last > first) {
            for (let i = first; i <= last; i++) {
                finalSum += i;
            }
        } if (first > last) {
            for (let i = last; i <= first; i++) {
                finalSum += i;
            }
        }
    } else {
        return 'ERROR';
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;