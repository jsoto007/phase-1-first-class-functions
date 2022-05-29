const returnFirstTwoDrivers = (arr) => {
  const newArr = [...arr];
  return newArr.slice(0, 1);
}

function receivesAFunction(callback) {
  return callback();
}

function returnsANamedFunction(name) {
  return name();

}
