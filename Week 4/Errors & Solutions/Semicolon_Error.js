// Bug due to ASI:

function getUser() {
  return                
  {
    name: "Abdul"
  };
}
console.log(getUser()); // Output: undefined

// Solution: To avoid ASI-related bugs, always add semicolons wherever necessary to get the correct output:

function getUser() {
  return {
    name: "Abdul"
  };
}
console.log(getUser()); // Output: { name: "Abdul" }
