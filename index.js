function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) return true;
    }
  }
  return false;
}

/*
OR
function hasTargetSum(array, target) {
  // create an object to keep track of all the numbers we've seen
  const seenNumbers = {};
  // iterate over the array of numbers
  for (const number of array) {
    // for the current number, identify a complementary number that adds to our target
    // (for example: if our number is 2, and the target is 5, the complementary number is 3)
    const complement = target - number;
    // check if any of the keys in our object is the complement to the current number
    // if so, return true
    if (seenNumbers[complement]) return true;
    // save the current number as the key on our object so we can check it later against other numbers
    seenNumbers[number] = true;
  }
  // if we reach the end of the array, return false
  return false;
}

THIS BIG O is LINEAR O(n)

OR 
function hasTargetSum(array, target) {
  const seenNumbers = new Set(); // initialize an empty Set
  for (const number of array) {
    const complement = target - number;

    // .has returns true if the Set includes the complement
    if (seenNumbers.has(complement)) return true;

    // .add adds the number to the Set
    seenNumbers.add(number);
  }
  return false;
}

time O(n) and space O(n);
*/

/* 
  Write the Big O time complexity of your function here
  function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    // n steps (depending on the length of the input array)
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      // n * n steps (nested loop!)
      if (array[j] === complement) return true;
    }
  }
  // 1 step
  return false;
}
O(n*n)

*/

/* 
  Add your pseudocode here

  iterate over the array of numbers
    for the current number, identify a complementary number that adds to our target
    (for example: if our number is 2, and the target is 5, the complementary number is 3)
      iterate over the remaining numbers in the array
        check if any of the remaining numbers is the complement
        if so, return true
  if we reach the end of the array, return false

  OR

  create an object to keep track of all the numbers we've seen
  iterate over the array of numbers
    for the current number, identify a complementary number that adds to our target
    (for example: if our number is 2, and the target is 5, the complementary number is 3)
    check if any of the keys in our object is the complement to the current number
      if so, return true
    save the current number as the key on our object so we can check it later against other numbers
  if we reach the end of the array, return false
*/

/*
  Add written explanation of your solution here
  I need to make a hasTargetSum function that checks if two numbers in an array add up to some target number. For example, if the array is [1,2,3,4] and the target number is 6, I know that 2 and 4 add up to 6, so I should return true. If I have the same array and the target is 10, no two numbers in the array add up to 10, so I should return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("");
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
