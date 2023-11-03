export function hIndex(citations) {
    citations.sort((a,b) => (b-a))
    return citations.filter((x,i) => (x>i)).length
 };