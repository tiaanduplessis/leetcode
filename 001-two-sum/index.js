'use strict'

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const amount = nums[i] + nums[j]
      if (amount === target) {
        return [i, j]
      }
    }
  }
}

module.exports = twoSum
