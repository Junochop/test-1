// Challenge 3 
//  var challengeThreeInputA = [1, 5, 7, 2, 5, 1, 1];
// function uniq(arr1) {
//     return arr1.filter(function (elem, index, self) {
//         console.log(elem, index, self);
//         return self.indexOf(elem) == self.lastIndexOf(elem);
//     });
// }
// var aNotherDivElement = document.getElementById('challenge-3');
// aNotherDivElement.innerHTML = "<h4>" + uniq(challengeThreeInputA) + "</h4>"
// ;
function writeToDom(input, id) {
    document.getElementById(id).innerHTML += input;
}

function challenge3(input) {
    var unique = findUnique(input);
    writeToDom(unique, "challenge-3");
}


function findUnique(array) {
    array.sort(function (a, b) {
        return a - b;
    });
    if (array[0] === array[1]) {
        return array.pop();
    } else {
        return array[0];
    }
}


var input3b = [1, 1, 1, 1, 6, 1, 1];
challenge3(input3b);

//-------------------------------------------

var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
];

// sort by value
items.sort(function (a, b) {
    return a.value - b.value;
    
});
console.log(items);

//

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
    return a - b;
});
console.log(numbers);