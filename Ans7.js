
const arr = [1, 2, 3, 4, 5];

const reversedArr = arr.reduce((acc, current) => {
  acc.unshift(current);
  return acc;
},[]);

console.log(reversedArr); 
