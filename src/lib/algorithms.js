const algorithmsObject = {
  "sorting algorithms": [
    {
      "bubble sort": {
        Javascript: ``,
        Python: ``,
        Java: `
        public class BubbleSort {
            public void sort(int[] array){
                boolean isSorted;
                for (int i = 0; i < array.length; i++) {
                    isSorted = true;
                    for (int j = 1; j < array.length - i; j++) {
                        if (array[j] < array[j - 1]) {
                            swap(array, j, j - 1);
                            isSorted = false;
                        }
        
                    }
                    if (isSorted) return;
        
                }
            }
        
        public void swap(int[] array, int index1, int index2){
            int tmp = array[index1];
            array[index1] = array[index2];
            array[index2] = tmp;
        }
        }`,
      },
    },
    { "heap sort": { Javascript: ``, Python: ``, Java: `` } },
    { "insertion sort": { Javascript: ``, Python: ``, Java: `` } },
    { "merge sort": { Javascript: ``, Python: ``, Java: `` } },
    { "quick sort": { Javascript: ``, Python: ``, Java: `` } },
    { "selection sort": { Javascript: ``, Python: ``, Java: `` } },
  ],

  "searching algorithms": [
    { "binary search": { Javascript: ``, Python: ``, Java: `` } },
    { "linear search": { Javascript: ``, Python: ``, Java: `` } },
  ],
};

export default algorithmsObject;

/**
 * Extracts the algorithms for a particular algorithm type
 * @param {string} algorithmType the type of algorithm e.g searching, sorting, etc.
 *
 * @returns an array containing the list of algorithms
 */
export const extractAlgorithms = (algorithmType) => {
  if (!algorithmType) return [];

  const algorithms = algorithmsObject[algorithmType];
  const extracted = algorithms.map((element) => {
    return Object.keys(element)[0];
  });

  return extracted;
};

/**
 * Extracts the codes of an algorithm form the algorithm object
 *
 * @param {string} algorithmType They type of algorithm e.g searching algorithm, dorting algorithm
 * @param {string} algorithmName The name of the algorithm e.g bubble sort, linear search, etc
 * @returns an object containing codes and the language they are written in
 */
export const getAlgorithmCodes = (algorithmType, algorithmName) => {
  if (!algorithmType || !algorithmName) return null;
  console.log("Algorithm type: ", algorithmType);
  const algorithmObj = algorithmsObject[algorithmType].find(
    (algo) => Object.keys(algo)[0] === algorithmName
  );
  if (!algorithmObj) return null;

  return Object.values(algorithmObj)[0];
};
