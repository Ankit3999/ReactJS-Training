function createCounter() {
    let count = 10;

    function increment() {
        count++;
        console.log("Counter:", count);
    }

    function getCount() {
        return count;
    }

    return {
        increment,
        getCount
    };
}
const counter = createCounter();

for(let i=0; i<10;i++){
    counter.increment()
}

console.log("Current count:", counter.getCount());
