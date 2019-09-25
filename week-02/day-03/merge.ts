
function merge(arr) {

    let chain = [];
    while (arr.length !== 0) {
        chain.push(arr.splice(0,2));
    }
    chain = chain.map(([a,b]) => b === undefined ? [a] : a > b ? [b,a] : [a,b]);

    while (chain.length !== 1) {
        let [a,b] = chain.splice(0,2);
        a.push(Infinity);
        b.push(Infinity);
        let pointA = 0;
        let pointB = 0;
        let tmpArr = [];
        while(pointA < a.length && pointB < b.length) {
            if(a[pointA] > b[pointB]) {
                tmpArr.push(b[pointB]);
                pointB++;
            } else {
                tmpArr.push(a[pointA]);
                pointA++;
            }
        }
        chain.push(tmpArr.slice(0,tmpArr.length - 1));
    }
    return chain[0];
}

console.log(merge([3,1,2,5,4,7,9,6,8]));