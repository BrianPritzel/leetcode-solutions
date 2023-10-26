export function reduce(nums, fn, init) {
    if (nums.length <1) return init
    let accum = init
    for (let i=0;i<nums.length;i++){
    accum = fn(accum, nums[i]);
    }
    return accum
};