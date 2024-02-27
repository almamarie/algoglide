/**
 * Sorts an array of numbers in ascending order
 *
 * @param {Array<number>} array The array to be sorted
 * @returns A sorted array
 */
export const bubbleSortAlgorithm = (array, speed = 100) => {
  console.log("Starting to sort: ", array);

  const elements = document.getElementsByClassName("visualization-bar");
  console.log("elements: ", +elements[0].getAttribute("data-length"));

  for (let i = 0; i < elements.length; i++) {
    let isSorted = true;

    for (let j = 1; j < elements.length - i; j++) {
      const jElementLength = elements[j].getAttribute("data-length");
      const jMinus1ElementLength = elements[j - 1].getAttribute("data-length");

      if (jElementLength < jMinus1ElementLength) {
        swapDOMElements(j, j - 1);
        isSorted = false;
      }
    }
    setTimeout(() => {
      return clearTimeout();
    }, 1000);

    if (isSorted) break;
  }

  console.log("Finished sorting array...", array);
};

const swap = (elements, index1, index2, speed) => {
  const temp = elements[index1];
  elements[index1] = elements[index2];
  elements[index2] = temp;
};

function swapDOMElements(index1, index2) {
  console.log("Here...");
  const parentElement = document.getElementById("bubble-sort-bars-ul");
  console.log("parentElement: ", parentElement);
  const element1 = parentElement.children[index1];
  const element2 = parentElement.children[index2];

  element1.style.backgroundColor = "red";
  element2.style.backgroundColor = "red";

  setTimeout(() => {
    return clearTimeout();
  }, 1000);

  // Swap positions in the DOM
  parentElement.insertBefore(element2, element1.nextSibling);
  // parentElement.insertBefore(element1, element2.nextSibling);

  setTimeout(() => {
    return clearTimeout();
  }, 1000);

  element1.style.backgroundColor = "#e6e5ff";
  element2.style.backgroundColor = "#e6e5ff";
}

let j = `
/**
 * 
 * /**
 * Sorts an array of numbers in ascending order
 *
 * @param {Array<number>} array The array to be sorted
 * @returns A sorted array
 */
export const bubbleSortAlgorithm = (array, speed = 100) => {
  console.log("Starting to sort: ", array);

  const elements = document.getElementsByClassName("visualization-bar");
  console.log("elements: ", +elements[0].getAttribute("data-length"));

  for (let i = 0; i < array.length; i++) {
    let isSorted = true;
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        isSorted = false;
      }
    }
    setTimeout(() => {
      return clearTimeout();
    }, 1000);

    if (isSorted) break;
  }

  // console.log("Finished sorting array...", array);
};

const swap = (array, index1, index2, speed) => {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};

`;
