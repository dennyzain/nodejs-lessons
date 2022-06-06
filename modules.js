//const apaya = require('./people'); // jika file di dalam folder yang sama, maka pathnya harus menggunakan ./ dan bisa custom nama variablenya
const { people, people2 } = require('./people');

console.log(people, people2);
// console.log(apaya);

const os = require('os'); // core module include in nodejs
console.log(os.platform(), os.homedir());
