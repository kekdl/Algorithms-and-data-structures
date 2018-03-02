let set = new Set();

let apple = { fruit: 'Яблоко' };
let chery = { fruit: 'вишня' };
let bannana = { fruit: 'Банан' };

set.add(apple);
set.add(chery);
set.add(bannana);
// только уникальные значение
set.add(bannana);
// но
set.size; //3

set.has(apple); // true
set.has(1); //false

set.delete(apple);
set.clear();

var setnew = new Set(['Первый', 'Второй', 'Третий']);

for (var value of setnew.values()) {
    console.log(value);
}

setnew.forEach((value, valueAgain, setnew) => {

    console.log(value);
});