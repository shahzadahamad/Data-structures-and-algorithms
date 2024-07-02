// Time Complexity :-
// 1. Best Case , Average Case & Worst Case : O(n^2)

// Space Complexity :- O(1)

const arr = [8, 20, -2, 4, -6, -2, -8, 2, 4, 1, 8, 9, 7, 11, 99, 1, 98, 75];

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }
    if (smallest != i) {
      [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    }
  }
  return arr;
};

console.log(selectionSort(arr));
