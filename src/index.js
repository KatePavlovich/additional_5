module.exports = function check(str, bracketsConfig) {
  // your solution
  let arr = str.split("");
  let aLen = arr.length;
  let brCLen = bracketsConfig.length;
  let stack = [];

  for (let i = 0; i < aLen; i++) {
    for (let j = 0; j < brCLen; j++) {
      if (arr[i] === bracketsConfig[j][0]) {
        stack.push(arr[i]);
        if (
          stack[stack.length - 1] === stack[stack.length - 2] &&
          stack[stack.length - 2] === bracketsConfig[j][1]
        ) {
          stack.splice(-2, 2);
        }
      } else {
        if (stack.length === 0 && arr[i] === bracketsConfig[j][1]) {
          return false;
        }

        if (
          arr[i] === bracketsConfig[j][1] &&
          bracketsConfig[j][0] === stack[stack.length - 1]
        ) {
          stack.pop();
        }
      }
    }
  }
  return stack.length === 0;
};
