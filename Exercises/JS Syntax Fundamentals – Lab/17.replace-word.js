let text = "The cat is on the mat, and the cat is happy.";
let replacedText = text.replace(/cat/, "dog");
console.log(replacedText); // Output: "The dog is on the mat, and the cat is happy."
// using g flag
let replacedAllText = text.replace(/cat/g, "dog");
console.log(replacedAllText); // Output: "The dog is on the mat, and the dog is happy."