var array = [2, 7, 13, 5, 78]

var targetNum = "9"
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                if (nums[i] + nums[j] === target) {
                    return [i, j];
                }
            }
        }
    }
};
console.log(twoSum(array, targetNum))