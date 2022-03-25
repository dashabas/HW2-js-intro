console.log('#5');
let x = 20;
let y = 5;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);


console.log('#6');
for (let i = 1; i <= 5; i++){
    console.log(i);
}

// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// let arr5 = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr5.length; i++) {
//     console.log(arr5[i]);
// }


console.log('#7');
for (let i = 5; i >= 1; i--){
    console.log(i);
}


console.log('#8');
function getMarkInfo(condition) {
    if (condition === 10) {
        console.log('У вас максимальный балл');
    } else {
        console.log('У вас средний балл')
    }
}
getMarkInfo(10);
getMarkInfo(1);


console.log('#9');
function getDayInfo(position) {
    switch (position) {
        case 0:
            console.log('Sunday');
            break;
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break;
        case 4:
            console.log('Thursday');
            break;
        case 5:
            console.log('Friday');
            break;
        case 6:
            console.log('Saturday');
            break;
        default:
            console.log('Wrong data');
            break;
    }
}
getDayInfo(0);
getDayInfo(1);
getDayInfo(2);
getDayInfo(3);
getDayInfo(4);
getDayInfo(5);
getDayInfo(6);


console.log('#10');
const arr = ['a', 'b', 'c'];
arr.push(1, 2, 3);
console.log(arr);


console.log('#11');
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const result = arr1.concat(arr2);
console.log(result);


console.log('#12');
function countNumber(number) {
    let sum = 0;
    for (let n = 1; n <= number; n++) {
        sum += n;
    }
    console.log(sum);
    return sum;
}
countNumber(3);
countNumber(5);
