// Time Complexity :-
// 1. Best Case : O(n) :- Occurs when the array is already sorted. (The inner loop will not execute)
// 2. Average Case & Worst Case : O(n^2)

// Space Complexity :- O(1)

const arr = [8, 20, -2, 4, -6, -2, -8, 2, 4, 1, 8, 9, 7, 11, 99, 1, 98, 75];

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let insertValue = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > insertValue) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = insertValue;
  }
  return arr;
};

console.log(insertionSort(arr));
