export function distinctDifferenceArray(nums) {
    return nums.map((x,i) => {
        const front = new Set(nums.slice(0,i+1))
        const back = new Set(nums.slice(i+1))
        return (front.size - back.size)
    })
};