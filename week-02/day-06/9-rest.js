
function matrix() {
    if (arguments.length < 3) {
        return null;
    }

    let nums = [];
    let height = arguments[0];
    let width = arguments[1];
    while(height--) {
        let tmp = [];
        nums.push(tmp);
        let i = width;
        while(i--) {
            tmp.push(0);
        }
    }
    let i = 0;
    height = arguments[0];
    let arr = [].slice.call(arguments).slice(2);
    while (i < height * width) {
        nums[parseInt(i / width)][i % width] = arr[i % arr.length];
        i++;
    }
    return nums;

}