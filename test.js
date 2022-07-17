const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question('whats your name: ', (name) => {
//   rl.question('whats your phone number: ', (phoneNumber) => {
//     const contact = { name, phoneNumber };

//     rl.close();
//   });
// });

function writeContactJson(data) {
  fs.readFile('./contacts/index.json', 'utf-8', (err) => {
    if (err) throw err;
    fs.writeFile('./contacts/index.json', JSON.stringify(data), (err) => console.log(err));
  });
}

function prompt(){
  return new Promise((resolve,reject)=>{
  rl.question('input your number? ',(answer=>{
    resolve(answer)
  rl.close()
  }))
  })
}

(async function(){
  const inputNumber=await prompt()
  if(inputNumber==true){
    console.log(`this ${inputNumber} positif number`)
  }else{
    console.log(`this ${inputNumber} negative number`)
  }
})()