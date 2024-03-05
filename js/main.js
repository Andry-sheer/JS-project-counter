//?----- 1 COUNTER ------------------------------------------->
let counter = 20;
console.log(`\nCOUNTER:`);
for (i = 0; i <= 20; i++) {
  console.log(`counter: ${counter}`);
  counter+=0.5;
}

//?----- 2 DOLLARS ------------------------------------------->
console.log(`\nDOLLARS:`);
console.log('1 dollar cost = 27 UAH');
let oneDollar = 27;
for (let j = 0; j <= 10; j*=2){
  oneDollar+=9;

  if (oneDollar === 270){
    console.log(`10 dollars cost = ${oneDollar} UAH`);
    continue;
  }

  if (oneDollar === 540) {
    console.log(`20 dollars cost = ${oneDollar} UAH`);
    continue;
  }

  if (oneDollar === 810) {
    console.log(`30 dollars cost = ${oneDollar} UAH`);
    continue;
  }

  if (oneDollar === 1080) {
    console.log(`40 dollars cost = ${oneDollar} UAH`);
    continue;
  }

  if (oneDollar === 1350) {
    console.log(`50 dollars cost = ${oneDollar} UAH`);
    continue;
  }

  if (oneDollar === 1620) {
    console.log(`60 dollars cost = ${oneDollar} UAH`);
    continue;
  }

  if (oneDollar === 1890) {
    console.log(`70 dollars cost = ${oneDollar} UAH`);
    continue;
  }

  if (oneDollar === 2160) {
    console.log(`80 dollars cost = ${oneDollar} UAH`);
    continue;
  }

  if (oneDollar === 2430) {
    console.log(`90 dollars cost = ${oneDollar} UAH`);
    continue;
  }

  if (oneDollar === 2700) {
    console.log(`100 dollars cost = ${oneDollar} UAH`);
    break;
  }
}



//?----- 3 SQRT NUMBERS ------------------------------------------->
  let n;
  console.log(`\nSQUARED:`);
  for (let x = 1; x <= 100; x++) {
    n = x**2;
    console.log(`squared of number: ${x} = ${n}`);
  if (n === 100){
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
let w = +prompt(`(ЗВЕДЕННЯ ЧИСЛА У 3 СТЕПЕНЬ) введіть число:`);
let cube = false;

for (g = 0; g < w; g++) {

  if (3**g === w){
    cube = true;
    alert(`${w} = (3 ** ${g})`);
    break;
  }
}

if (!cube) {
  alert(` це число ${w} не являеться у 3 степені`);
}