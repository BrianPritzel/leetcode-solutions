export function canCompleteCircuit(gas, cost) {
        let totalDelta = 0;
        let currTank = 0;
        let start = 0;
        for(let i=0;i<gas.length;i++){
        totalDelta += gas[i] - cost[i]
        currTank += gas[i] - cost[i]
            if(currTank < 0){
            currTank = 0
            start = i+1
            }
        }
        if(totalDelta<0) return -1
        return start
};