/**
 * Generates an array of random integers
 *
 * @param {number} arraySize the size to the array to generate
 * @returns an array of integers
 */

const autoGenerateArrayofIntegers = (arraySize) => {
  const array = [];
  const maxArrayNumber = calcMaxArraySize(arraySize);

  if (arraySize < 5) arraySize = 5;
  if (arraySize > 200) arraySize = 200;

  for (let i = 0; i < arraySize; i++) {
    const generatedNumber = Math.floor(Math.random() * maxArrayNumber);
    array.push(generatedNumber);
  }

  return array;
};

/**
 * Calculates the max array number
 *
 * @param {number} arraySize the size of the array to be generated
 * @returns a number in the below order:
 *  - 150 - 200 = 1000
 *  - 100 - 150 = 800
 *  - 50 - 100  = 400
 *  - 0 - 50    = 200
 *  - 0 - 10    = 50
 */
const calcMaxArraySize = (arraySize) => {
  let maxArrayNumber;

  if (arraySize <= 10) {
    maxArrayNumber = 50;
  }

  if (arraySize >= 11 && arraySize < 50) {
    maxArrayNumber = 200;
  }

  if (arraySize >= 50 && arraySize < 100) {
    maxArrayNumber = 400;
  }

  if (arraySize >= 100 && arraySize < 150) {
    maxArrayNumber = 800;
  }

  if (arraySize >= 200) {
    maxArrayNumber = 1000;
  }

  return maxArrayNumber;
};

export default autoGenerateArrayofIntegers;
