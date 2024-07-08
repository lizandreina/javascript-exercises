const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear();
    people.map(object => {
        if (!object.yearOfDeath) {object.yearOfDeath = currentYear};
});
    people.sort((a, b) => a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? -1 : 1);
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
