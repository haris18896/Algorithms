/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
  // Validate input
  if (rowsCount * colsCount !== this.length) {
    return [];
  }

  // Handle edge case of empty array
  if (this.length === 0) {
    return [];
  }

  // Initialize 2D result array
  const result = Array(rowsCount)
    .fill(null)
    .map(() => Array(colsCount));

  let index = 0;

  // Fill each column alternately
  for (let col = 0; col < colsCount; col++) {
    if (col % 2 === 0) {
      // Even columns: fill top to bottom
      for (let row = 0; row < rowsCount; row++) {
        result[row][col] = this[index++];
      }
    } else {
      // Odd columns: fill bottom to top
      for (let row = rowsCount - 1; row >= 0; row--) {
        result[row][col] = this[index++];
      }
    }
  }

  return result;
};

// Test cases
console.log("Testing snail traversal...");

// Example 1
console.log("\nExample 1:");
const nums1 = [
  19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15,
];
const result1 = nums1.snail(5, 4);
console.log("Input:", nums1);
console.log("Output:");
result1.forEach((row) => console.log(row));
// Expected:
// [19,17,16,15]
// [10,1,14,4]
// [3,2,12,20]
// [7,5,18,11]
// [9,8,6,13]

// Example 2
console.log("\nExample 2:");
const nums2 = [1, 2, 3, 4];
const result2 = nums2.snail(1, 4);
console.log("Input:", nums2);
console.log("Output:", result2);
// Expected: [[1, 2, 3, 4]]

// Example 3 - Invalid input
console.log("\nExample 3:");
const nums3 = [1, 3];
const result3 = nums3.snail(2, 2);
console.log("Input:", nums3);
console.log("Output:", result3);
// Expected: []

// Additional test cases
console.log("\nAdditional tests:");

// Test 4: Single column
const nums4 = [1, 2, 3];
const result4 = nums4.snail(3, 1);
console.log("Single column [1,2,3] -> 3x1:");
console.log(result4);
// Expected: [[1], [2], [3]]

// Test 5: Single row
const nums5 = [5, 6, 7, 8];
const result5 = nums5.snail(1, 4);
console.log("Single row [5,6,7,8] -> 1x4:");
console.log(result5);
// Expected: [[5, 6, 7, 8]]

// Test 6: 2x3 matrix
const nums6 = [1, 2, 3, 4, 5, 6];
const result6 = nums6.snail(2, 3);
console.log("2x3 matrix [1,2,3,4,5,6]:");
result6.forEach((row) => console.log(row));
// Expected:
// [1, 4, 5]
// [2, 3, 6]

// Test 7: Empty array
const nums7 = [];
const result7 = nums7.snail(0, 0);
console.log("Empty array:", result7);
// Expected: []

// Test 8: Invalid dimensions
const nums8 = [1, 2, 3];
const result8 = nums8.snail(2, 2);
console.log("Invalid dimensions [1,2,3] -> 2x2:", result8);
// Expected: []
