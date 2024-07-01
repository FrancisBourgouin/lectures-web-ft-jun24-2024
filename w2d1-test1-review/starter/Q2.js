/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by medium. Do not alter.
const round = function (number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */

const median = function (arr) {
  //  IMPLEMENT ME!
};

// median([1,2,3]) === 2
// 2) median([2,1,3]) === 2
// 3) median([1,2,3,4]) === 2.5
// 4) median([3,4,1,2])

// Don't change below:

module.exports = { median };
