const fs = require('fs'); // fs = file system module (core module)

// ? reading files

//const readSync = fs.readFileSync('./text/greet.txt'); // readFileSync = synchronous method
// console.log(readSync.toString());

// fs.readFile('./text/greet.txt', (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// }); // readFile = asynchronous method

//console.log('last line'); // last line will be printed before the result of readFile because it is asynchronous

//  if we use readFileSync, the readSync error the console.log('last line') not printed
//  otherwise the readFile doesn't blocking the console.log('last line') if error

// ? creating files

// fs.writeFile('text/greet.txt', 'my name is denny abbas', (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('bio.txt created');
// }); // writeFile = asynchronous method (callback function)
// fs.writeFileSync('text/greet.txt', 'my name is denny abbas'); // writeFileSync = synchronous method

// console.log('last line');
// if we use writeFileSync, the readSync error the console.log('last line') not printed

// ? directories

// if (!fs.existsSync('img')) {
// if the directory doesn't exist, create it
//   fs.mkdir('img', (err) => {
//     if (err) console.log(err);
//     console.log('img folder created');
//   }); // mkdir = asynchronous method (callback function)
// } else {
//   fs.rmdir('img', (err) => {
//     if (err) console.log(err);
//     console.log('img folder deleted');
//   }); // rmdir = asynchronous method (callback function)
//   console.log('folder already exist and deleted');
// }
// if we use mkdir and the folder already exist, the error will be printed and cannot replace the folder

// ? deleting files

if (fs.existsSync('text/greet.txt')) {
  fs.unlink('text/greet.txt', (err) => {
    if (err) console.log(err);
    console.log('greet.txt deleted');
  }); // unlink = asynchronous method (callback function)
} else {
  fs.writeFile('text/greet.txt', 'Hello, denny abbas. how are you?', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('greet.txt created');
  });
}
// unlink for delete the file not folder
// fs.unlinkSync('text/greet.txt'); // unlinkSync = synchronous method
