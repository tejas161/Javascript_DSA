                            
// Node class for the binary tree
class Node {
  constructor(val) {
      this.data = val;
      this.left = null;
      this.right = null;
  }
}

// Function to perform inorder traversal
// of the tree and store values in 'arr'
function inorder(root, arr) {
  // If the current node is null
  // (base case for recursion), return
  if (root === null) {
      return;
  }
  // Recursively traverse the left subtree
  inorder(root.left, arr);
  // Push the current node's
  // value into the array
  arr.push(root.data);
  // Recursively traverse 
  // the right subtree
  inorder(root.right, arr);
}

// Function to initiate inorder traversal
// and return the resulting array
function inOrder(root) {
  // Create an empty array to
  // store inorder traversal values
  const arr = [];
  // Call the inorder traversal function
  inorder(root, arr);
  // Return the resulting array
  // containing inorder traversal values
  return arr;
}

// Function to perform preorder traversal
// of the tree and store values in 'arr'
function preorder(root, arr) {
  // If the current node is NULL
  // (base case for recursion), return
  if (root === null) {
      return;
  }
  // Push the current node's
  // value into the array
  arr.push(root.data);
  // Recursively traverse
  // the left subtree
  preorder(root.left, arr);
  // Recursively traverse 
  // the right subtree
  preorder(root.right, arr);
}

// Function to initiate preorder traversal
// and return the resulting array
function preOrder(root) {
  // Create an empty array to
  // store preorder traversal values
  const arr = [];
  // Call the preorder traversal function
  preorder(root, arr);
  // Return the resulting array
  // containing preorder traversal values
  return arr;
}

// Creating a sample binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Getting inorder traversal
const result1 = inOrder(root);
console.log(result1);

// Getting preorder traversal
const result2 = preOrder(root);
console.log(result2);

// Displaying the inorder traversal result
console.log("Inorder Traversal: " + result1.join(" "));
console.log("Preorder Traversal: " + result2.join(" "));
                          
                      