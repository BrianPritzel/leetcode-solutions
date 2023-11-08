export function numToRoman(num) {
    let s = num.toString()
    let ans = "";
    let start = 4-s.length;
    console.log(start)
    const vals = [
        {'0':'','3':'MMM','2':'MM','1':'M'},
        {'0':'','9':'CM','8':'DCCC','7':'DCC','6':'DC','5':'D','4':'CD','3':'CCC','2':'CC','1':'C'},
        {'0':'','9':'XC','8':'LXXX','7':'LXX','6':'LX','5':'L','4':'XL','3':'XXX','2':'XX','1':'X'},
        {'0':'','9':'IX','8':'VIII','7':'VII','6':'VI','5':'V','4':'IV','3':'III','2':'II','1':'I'}
    ]
    for(let i=start, j=0;j<s.length;i++,j++){
        console.log(vals[i[s[j]]])
      ans += vals[i][s[j]]
    }
    return ans
  };