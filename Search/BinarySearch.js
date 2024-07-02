// Time Complexity :-
// 1. Best Case : O(1) :- This occurs when the target value is found at the middle of the array on the first comparison.
// 2. Average Case & Worst Case : O(logn) :- the algorithm will reduce the search space by half each time, leading to logarithmic time complexity.

// Space Complexity :- O(1)

const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
};

const arr = [1, 3, 5, 7, 9];
const target = 7;
console.log(binarySearch(arr, target));

// Recursive Binary Search

// Time Complexity :-
// 1. Best Case : O(1) :- This occurs when the target value is found at the middle of the array on the first comparison.
// 2. Average Case & Worst Case : O(logn) :- the algorithm will reduce the search space by half each time, leading to logarithmic time complexity.

// Space Complexity :- O(logn) :-  The space complexity is determined by the call stack used for recursion.

const binarySearchRecursive = (arr, target, start, end) => {
  if (start > end) {
    return -1;
  }

  const middle = Math.floor((start + end) / 2);

  if (arr[middle] === target) {
    return middle;
  } else if (arr[middle] < target) {
    return binarySearchRecursive(arr, target, middle + 1, end);
  } else {
    return binarySearchRecursive(arr, target, start, middle - 1);
  }
};

const arr1 = [1, 3, 5, 7, 9];
const target1 = 9;
console.log(binarySearchRecursive(arr, target1, 0, arr.length - 1));
