// .reduce method reduces the elements of an array to a single value

const prices = [10,23,4,56,90,100,250];
const total = prices.reduce(sum);
console.log(total);
//it needs accumulator to store the value and it will start adding to the accumulator
function sum(accumulator, element){
    return accumulator+element;
}

const grades = [75,50,90,80,65,95];

const maxScore = grades.reduce(maximum);
console.log(maxScore);
function maximum(accumulator,element){
    return Math.max(accumulator,element);
}
