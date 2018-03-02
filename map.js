let map = new Map();

let obj = { key: 2 };
let arr = ['1', '2'];

map.set(0, 'val1');
map.set('1', 'val2');
map.set(obj, 'val3');
map.set(arr, 'val3');

map.get('1');
map.get(obj);

map.size;

map.delete(obj);

console.log(map.get('1'));

let mapnew = new Map([
    ['f1', 'aple'],
    ['f2', 'chery'],
    ['f3', 'banana']
]);

for (let key of mapnew.keys()) {
    console.log(key);
}

for (let value of mapnew.values()) {
    console.log(value);
}

mapnew.forEach((value, key, mapnew) => {
    console.log(`${key}: dj во как => ${value}`);
});