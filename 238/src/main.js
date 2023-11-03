export function productExceptSelf(nums) {
    const total = []
    let productPlaceholder = 1

    for (let i = 0; i < nums.length; i++) {
        total[i] = productPlaceholder
        productPlaceholder *= nums[i]
    }

    productPlaceholder = 1
    for (let j = nums.length - 1; j >= 0; j--) {
        total[j] *= productPlaceholder
        productPlaceholder *= nums[j]
    }

    return total
};