/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    var map = {}
    var result = []
    for(var i = 0, len = nums.length;i<len;i++){
        var diff = target - nums[i]
        if(map[diff] !== undefined){
            result = [map[diff], i]
        }else{
            map[nums[i]] = i
        }
    }

    return result
};
