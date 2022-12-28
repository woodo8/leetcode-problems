var containsDuplicate = function (nums) {
    let result = nums.some((item,index)=>nums.indexOf(item)!==index)
    return result
};