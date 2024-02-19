let instances = 0;
function methodInstance() {
    let invocations = 0;

    function callingInvocation() {
        invocations++;
        return `Invocations: ${invocations}, Instances: ${instances}`;
    }

    instances++;
    return callingInvocation;
}

const methodInstance1 = methodInstance();
console.log(methodInstance1());
console.log(methodInstance1());

const methodInstance2 = methodInstance();
console.log(methodInstance2());
console.log(methodInstance2());