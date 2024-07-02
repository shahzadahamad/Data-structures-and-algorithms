// Time Complexity :-
// 1. Best Case , Average Case & Worst Case : O(nlogn)

// Space Complexity :- O(n)

const arr = [8, 20, -2, 4, -6, -2, -8, 2, 4, 1, 8, 9, 7, 11, 99, 1, 98, 75];

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

const merge = (left, right) => {
  const sortedArray = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
  return [...sortedArray, ...left, ...right];
};

console.log(mergeSort(arr));
