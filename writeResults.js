const fs = require('fs');
const generateNames = require('./generateNames');
const getRandomInteger = require('./getRandomInteger')


function writeResults() {
  const num = process.argv[2] || getRandomInteger();
  const strResult = generateNames(num).join('\n');
  fs.writeFileSync(`./result/${num}-names.txt`, strResult);
}

module.exports = writeResults;
