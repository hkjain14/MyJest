const mul = require('./MultClass');
const add = require('./AddFunc');
const div = require('./DivObject');

function addition(a,b){
  return add(a,b);
}

function division(a,b){
  return div.doDiv(a,b);
}

function divisionAlt(a,b){
  return div.fakeFunc(a,b);
}

function multiplication(a,b) {
  const m = new mul();
  return m.doMult(a,b);
}

function multiplicationAlt(a,b){
  const s = new mul();
  // Although MultClass does not have fakeFunc, still this is mockable
  // when we mock the object and thus give our own methods in it
  return s.fakeFunc(a,b);
}


module.exports = {addition,division,multiplication,multiplicationAlt,divisionAlt};
