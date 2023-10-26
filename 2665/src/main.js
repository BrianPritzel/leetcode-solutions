class Counter{
    constructor(init){
        this.count = init;
        this.init = init;
    }
    increment(){
        this.count++;
        return this.count
    }
    decrement(){
        this.count--;
        return this.count
    }
    reset(){
        this.count = this.init;
        return this.count
    }
}

export function counter(init) { 
    return new Counter(init);
};