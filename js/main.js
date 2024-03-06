//?----- 1 COUNTER ------------------------------------------->
let counter = 20;
console.log(`\nCOUNTER:`);
for (i = 0; i <= 20; i++) {
  console.log(`counter: ${counter}`);
  counter+=0.5;
}

//?----- 2 DOLLARS ------------------------------------------->
console.log(`\nDOLLARS:`);
console.log('"1: dollar cost = 27 UAH"');
let dollar;
let dollarCounter;

for (let j = 0; j <= 100; j+=10){
  dollarCounter = j+10; //? (для відліку не від '0' а від '10')!!!
  dollar = dollarCounter*27;

  if (dollarCounter > 100){
    break;
  }
  if (dollarCounter <= 270){
    console.log(` ${dollarCounter}$ dollars cost = ${dollar} UAH`);
    continue;
  }
}



//?----- 3 SQRT NUMBERS (UPDATE) ------------------------------------------->
  let sNumber = +prompt(`(SQRT NUMBERS) Ведіть число: `);
  let sqrtNumber = Math.sqrt(sNumber);

  console.log(`\nSQUARED:`);
  for (let x = 1; x <= sqrtNumber; x++) {
    console.log(x);
  if (sqrtNumber >= 100){
      break;
    }
  }


//?----- 4 PRIME NUMBERS ------------------------------------------->
const numb = +prompt("(ПРОСТІ ЧИСЛА) вкажіть прості числа: ");

let numTrue = true;

if (!numb) { alert(`ви натиснули кнопку відміни!`); }

if (numb === 1) { alert("1: не є простим числом"); }

else if (numb > 1) {

  for (let q = 2; q < numb; q++) {
    if (numb % q == 0) {
        numTrue = false;
        break;
    }
  }

  if (numTrue) { alert(`число: ${numb} просте число`); }

  else { alert(`число: ${numb} не є простим числом`); }

}


//?----- 5 INFINITY ------------------------------------------->
let primeNamber = +prompt(`(ЗВЕДЕННЯ ЧИСЛА У 3 СТЕПЕНЬ) введіть число:`);
let numberFalse = false;

for (g = 0; g < primeNamber; g++) {

  if (3**g === primeNamber){
    numberFalse = true;
    alert(`${primeNamber} = (3 ** ${g})`);
    break;
  }
}

if (!numberFalse) {
  alert(` це число ${primeNamber} не являеться у 3 степені`);
}