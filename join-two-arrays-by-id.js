/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const map = new Map();

  // Add all from arr1 to map
  for (const obj of arr1) {
    map.set(obj.id, { ...obj });
  }

  // Merge or add from arr2
  for (const obj of arr2) {
    if (map.has(obj.id)) {
      const existing = map.get(obj.id);
      // Merge: keys from arr2 override keys from arr1
      map.set(obj.id, { ...existing, ...obj });
    } else {
      map.set(obj.id, { ...obj });
    }
  }

  // Convert to array and sort by id
  return Array.from(map.values()).sort((a, b) => a.id - b.id);
};

console.log(
  join(
    [
      { id: 1, x: 1 },
      { id: 2, x: 9 },
    ],
    [
      { id: 1, y: 2 },
      { id: 3, y: 0 },
    ]
  )
); // [{ id: 1, x: 1, y: 2 }, { id: 2, x: 9 }, { id: 3, y: 0 }]
