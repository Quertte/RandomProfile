const randomProfile = require('random-profile-generator');
const getRandomInteger = require('./getRandomInteger')

function generateNames(count = process.argv[2] || getRandomInteger()) {
  const arrNames = [];
  for (let i = 0; i < count; i++) {
    arrNames.push(randomProfile.name())
  }
  return arrNames;
}

module.exports = generateNames;
