/** 
--문제
정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다.

--입력
인자 1 : arr
number 타입을 요소로 갖는 배열
arr[i]는 정수
arr.length는 100,000 이하

--출력
number 타입을 요소로 갖는 배열을 리턴해야 합니다.
배열의 요소는 오름차순으로 정렬되어야 합니다.
arr[i] <= arr[j] (i < j)

--주의사항
퀵 정렬을 구현해야 합니다.
arr.sort 사용은 금지됩니다.
입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.

--입출력 예시
1
2
let output = quickSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]

--Advanced
quickSort 함수의 두 번째 인자로 callback 함수를 받아서, 그 함수의 리턴값을 기준으로 요소들을 정렬해 보세요.} arr 
 */


/* 기본 quickSort solution
const quickSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  if(arr.length <= 1) 
    return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];
  
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return quickSort(left).concat(pivot, quickSort(right));
};

let output = quickSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]

*/

const quickSort = function (arr, callback = (item) => item) {
  // TODO: 여기에 코드를 작성합니다.
  if(arr.length <= 1) 
    return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];
  
  for(let i = 1; i < arr.length; i++) {
    if(callback(arr[i]) < callback(pivot)) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return quickSort(left).concat(pivot, quickSort(right));
};

const cb = (item) => item * item;
let output = quickSort([-10, -11, 2, 29], cb); 
console.log(output); // 2, -10, -11, 29