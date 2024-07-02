// Time Complexity :-
// 1. Best Case : O(n) :- Occurs when the array is already sorted.
// 2. Average Case & Worst Case : O(n^2)

// Space Complexity :- O(1)

const arr = [8, 20, -2, 4, -6, -2, -8, 2, 4, 1, 8, 9, 7, 11, 99, 1, 98, 75];

const bubbleSort = (arr) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};

console.log(bubbleSort(arr));
