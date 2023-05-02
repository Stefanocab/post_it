let fs = require('fs')
function addElementToJSON(jsonData, element) { //push degli elementi nel json
jsonData.push(element)
}

function writeFileJSON(file, dataJSON) { // scrittura del file json
fs.writeFile(file, JSON.stringify(dataJSON), (err) => {
if (err) {
throw err;
} else
console.log('i dati li ho scritti nel file person.json');
})
}

module.exports = { addElementToJSON: addElementToJSON, writeFileJSON: writeFileJSON }