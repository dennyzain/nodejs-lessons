// ! global variables
// console.log(global);

global.setTimeout(() => {
  console.log('in the timeout');
  clearInterval(interval);
}, 3000);

const interval = setInterval(() => {
  console.log('in the interval');
}, 1000);

console.log(__dirname); // for check the path of the current folder
console.log(__filename); // for check the path of the current file
