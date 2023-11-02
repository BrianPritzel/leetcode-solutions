export function majorityElement(nums) {
    nums.sort()
    const mid = Math.floor(nums.length/2)
    if (nums[0]  === nums[mid]) {
        return nums[0]
    } else return nums[mid]
};