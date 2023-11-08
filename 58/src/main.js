export function lengthOfLastWord(s) {
    const words = s.trim().split(' ')
    let last = words[words.length-1]
    return last.length
};