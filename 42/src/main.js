export function trap(height) {
    let left = 0
    let right = height.length-1
    let leftMax = 0
    let rightMax = 0
    let total = 0

    while(left<right){
        if(height[left]<height[right]){
            if(height[left]>=leftMax){
                leftMax = height[left]
            } else {
                total += leftMax - height[left]
            }
            left++
        } else {
            if(height[right]>=rightMax){
                rightMax = height[right]
            } else {
                total += rightMax - height[right]
            }
            right--
        }
    }
    return total
};