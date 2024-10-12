console.log('#1');
let array = ['Привет, ', 'мир', '!'];
let result = array.join('');
console.log(result);

console.log('#2');
array[0] = 'Пока, ';
console.log(array);

console.log('#3');
let str = '023m0df0dfg0';
result = [];

for (let index = 0; index < str.length; index++) {
    const element = str[index];
    if(element== '0') result.push(index);
}
console.log('Строка: ', str);
console.log('Позиции нулей: ', result);

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

console.log('#4');
array = new Array(10);
let filteredArray = [];
for (let index = 0; index < array.length; index++) {
    array[index] = Math.random();
    if (array[index].toString().includes('5')) filteredArray.push(array[index]);
}
console.log('array: ', array);

console.log('filteredArray: ', filteredArray);

console.log('#5');

function mergeArrays(arr1, arr2){
    let mergedArray = [];
    let length = arr1.length+arr2.length;

    for (let index = 0; index < length; index++) {
        if (index<=arr1.length-1){
            mergedArray.push(arr1[index]);
        }
        if (index<=arr2.length-1){
            mergedArray.push(arr2[index]);
        }
    }
    return mergedArray;
}

arr1 = [1, 2, 3]
arr2 = ['a', 'b', 'c']

mergedArray = mergeArrays(arr1, arr2);
console.log("Первый массив:", arr1);
console.log("Второй массив:", arr2);
console.log("Merged массив:", mergedArray);

console.log('#6');

array = new Array(10);
for (let index = 0; index < array.length; index++) {
    array[index] = Math.floor(Math.random()*100)+1;
}

let sortedArray = [...array].sort((a,b)=>(b-a));

console.log("Исходный массив:", array); 
console.log("Отсортированный по убыванию массив:", sortedArray);

console.log('#7');

rusWeek = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
engWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

console.log("Дни недели на русском (по алфавиту):", rusWeek.sort())
console.log("Дни недели на английском (по алфавиту):", engWeek.sort())

console.log('#8');
let colors = ['orange', 'red', 'green', 'blue'];
let sortedColors = [...colors].sort((a, b) => a.length - b.length)

console.log("Исходный массив:", colors)
console.log("Отсортированный (по возрастанию) по длине строк массив:", sortedColors);

console.log('#9');

array = new Array(8);

for (let index = 0; index < array.length; index++) {
    array[index] = Math.floor(Math.random()*51);   
}

let firstHalf = array.slice(0, array.length/2);
let secondHalf = array.slice(array.length/2, array.length);

let sumFirstHalf = firstHalf.reduce((sum, cur) => sum + cur, 0);
let sumSecondHalf = secondHalf.reduce((sum, cur) => sum + cur, 0);
let quotient = sumFirstHalf / sumSecondHalf;

console.log("Массив:", array); 
console.log("Сумма элементов первой половины массива:", sumFirstHalf);
console.log("Сумма элементов второй половины массива:", sumSecondHalf);
console.log("Частное суммы первой половины, деленной на сумму второй половины:", quotient);

console.log('#10');

array = new Array(10);
let countNeg = 0;

for (let index = 0; index < array.length; index++) {
    array[index] = randomInteger(-100, 100);
    if (array[index] < 0){
        countNeg++;
    }
}

console.log("Массив:", array);
console.log("Количество отрицательных элементов:", countNeg);

console.log("#11")

array = new Array(10);

for (let index = 0; index < array.length; index++) {
    array[index] = randomInteger(-50, 50);
}

filteredArray = array.filter(num => num > 0 && num%2 == 0);

console.log("Исходный массив: ", array);
console.log("Отфильтрованный массив:", filteredArray);

console.log("#12")

str = "abc123def456ghi";

let firstDigitPosition = str.search(/\d/) + 1;  // Используем регулярное выражение для поиска первой цифры

let lastDigitPosition = str.lastIndexOf(str.match(/\d(?!.*\d)/)) + 1;  // Используем регулярное выражение для поиска последней цифры

console.log("Строка:", str);
console.log("Позиция первой цифры:", firstDigitPosition);
console.log("Позиция последней цифры:", lastDigitPosition);


