function foo(x) {
  if (x === null || x === undefined) {
    return 0; 
  } else if (x < 0) {
    return -1;
  } else {
    return 1; 
  }
}

console.log(foo(null)); // 0
console.log(foo(undefined)); // 0