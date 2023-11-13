export function isPalindrome(s) {
    let res = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
    console.log(res)
    if(res === res.split("").reverse().join("")){return true}
    return false
};