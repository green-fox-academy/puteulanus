
function bubble(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let u = 0; u < arr.length - 1; u++) {
            if (arr[u] > arr[u + 1]) {
                let tmp = arr[u + 1];
                arr[u + 1] = arr[u];
                arr[u] = tmp;
            }
        }
    }
    return arr;
}

console.log(bubble([3,1,2,5,4,7,9,6,8]));