export function rotate(nums, k) {
    if (nums.length < 2) return
    if (k < 1 || k % nums.length === 0) return
     const arr = nums.slice(-k % nums.length).concat(nums.slice(0,nums.length-(k % nums.length)))
     nums.splice(0, Infinity, ...arr)
};