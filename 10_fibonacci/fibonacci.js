const fibonacci = function(number) {
    let converted = Number(number);
    let sequence = [1, 1];
    for(let i = 2; i <= converted; i++){
        sequence.push(sequence[i-1] + sequence[i-2]);
    }
    if (converted === 0) return 0;
    if (converted < 0) return 'OOPS';
    return sequence[converted - 1];
};

// Do not edit below this line
module.exports = fibonacci;
