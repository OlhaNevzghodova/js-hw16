let array = [];
array.length = +prompt('enter a length of array');
for (let i = 0; i < array.length; i++) {
    array[i] = prompt('enter an element of array');
}
alert(array);

array.sort((a, b) => a - b);

alert(array);

array.splice(2, 3);

alert(array);