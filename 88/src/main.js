export function merge(nums1, m, nums2, n) {
    let k = 0;
    for (let i=0;i<nums1.length;i++){
        if (nums1[i] === 0 && k < nums2.length) {
        nums1.splice(i,1,nums2[k])
        k++
        }
    }
    nums1.sort((a, b) => a - b);
};