// Time Complexity :-
// 1. Best Case : O(1) :- (when the target is the first element in the array)
// 2. Average Case : O(n)
// 3. Worst Case : O(n) :- (when the target is the last element in the array or not present at all)

// Space Complexity :- O(1)

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

const arr = [1, 3, 5, 7, 9];
const target = 5;
console.log(linearSearch(arr,target));