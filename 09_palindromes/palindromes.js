const palindromes = function (input) {
    let initial = input.replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '').toLowerCase();
    let reversed = input.replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '').split('').reverse().join('').toLowerCase();
    return initial === reversed;
};

// Do not edit below this line
module.exports = palindromes;