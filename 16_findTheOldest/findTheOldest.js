const findTheOldest = function(array) {

  return array.reduce((acc, person) => {

    let year = new Date()
    let age = person.yearOfDeath - person.yearOfBirth;

    let accAge = acc.yearOfDeath - acc.yearOfBirth;

    if (person.yearOfDeath == undefined)
    {
      age = year.getFullYear() - person.yearOfBirth
    }

    if (acc.yearOfDeath == undefined)
    {
      accAge = year.getFullYear() - acc.yearOfBirth;
    }
    return age > accAge ? person : acc;

  })




};

// Do not edit below this line
module.exports = findTheOldest;
