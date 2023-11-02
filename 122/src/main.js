export function maxProfit(prices) {
    let profit = 0
    for(let i=prices.length;i>=0;i--){
        if(prices[i]-prices[i-1] > 0) profit += prices[i]-prices[i-1]
    }
    return profit
};