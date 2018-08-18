// Check to see if any of the elements in the
// array are numbers greater than 10.

function anyGreaterThan10 (input) {

  // input.some(item => item > 10)

  return input.some(function(item){
    return item > 10
  })
};

// Check to see if any of the strings in
// the array is longer than 10 characters.

function longWord (input) {
  return input.some(function(item){
    return item.length > 10
  })
};

// Check to see if any of the elements in
// the matrix are true.

function truePossibilities (input) {
  return input.some(function(item, i){
    if (item[i]=== true){
      return item
    }
  })
};

// Check to see if 'Lost' is in
// the phrase (using some).

function lostCarcosa (input) {
  return input.some(function(item, i){
    let word = 'Lost'
    if (item.includes(word)){
      return item
    }
  })
};

module.exports = {
  anyGreaterThan10,
  longWord,
  truePossibilities,
  lostCarcosa
};
