// First Algo :-

// Time Complexity :-
// 1. Best Case : O(nlogn)
// 2. Average Case : O(nlogn)
// 3. Worst Case : O(n^2) :- This occurs when the pivot chosen is either the smallest or largest element every time

// Space Complexity
// 1. Best Case , Average Case & Worst Case : O(n)

const arr = [8, 20, -2, 4, -6, -2, -8, 2, 4, 1, 8, 9, 7, 11, 99, 1, 98, 75];

const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort(arr));

// Second Algo :-

// Time Complexity :-
// 1. Best Case : O(nlogn)
// 2. Average Case : O(nlogn)
// 3. Worst Case : O(n^2) :- This occurs when the pivot chosen is either the smallest or largest element every time

// Space Complexity
// 1. Best Case & Average Case : O(logn)
// 2. Worst Case : O(n)

const arr1 = [8, 20, -2, 4, -6, -2, -8, 2, 4, 1, 8, 9, 7, 11, 99, 1, 98, 75];

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

const pivot = (arr, start, end) => {
  const pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIdx++;
      if (swapIdx !== i) {
        swap(arr, swapIdx, i);
      }
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
};

const quickSort1 = (arr, start, end) => {
  if (start < end) {
    const pivotIdx = pivot(arr, start, end);
    quickSort1(arr, start, pivotIdx - 1);
    quickSort1(arr, pivotIdx + 1, end);
  }
  return arr;
};

console.log(quickSort1(arr, 0, arr.length - 1));
