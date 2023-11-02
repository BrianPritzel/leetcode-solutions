export function maxProfit(prices) {
    let low = Infinity
    let high = -Infinity
    for(let i=prices.length;i>=0;i--){
        if(prices[i] > high){
            const profit = high-low
            high = prices[i]
            low = high - profit
            continue
        }
        if (prices[i] < low) low = prices[i]
    }
    return Math.max(0,high-low)
};