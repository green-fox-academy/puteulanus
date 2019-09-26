class Matrix {

    private nums: number[][] = [];

    constructor(width: number = 0, height: number = 0, default_value: any = 0) {
        this.create(width,height,default_value);
    }

    create(width: number, height: number, default_value: any = 0): void {
        this.nums = [];
        while(height--) {
            let tmp = [];
            this.nums.push(tmp);
            let i = width;
            while(i--) {
                tmp.push(default_value);
            }
        }
    }

    get(x: number, y: number): any {
        if(this.xy_not_allow(x, y)) {
            return undefined;
        }
        return this.nums[x - 1][y -1];
    }

    set(x: number, y: number, value: any) {
        if(this.xy_not_allow(x, y)) {
            return undefined;
        }
        this.nums[x - 1][y - 1] = value;
    }

    get size(): Object {
        if(this.nums === []) {
            return {height: 0, width: 0}
        }
        return {height: this.nums.length, width: this.nums[0].length}
    }

    getAll(): number[][] {
        return this.nums.map(line => line.slice());
    }

    public xy_not_allow(x: number, y: number): boolean {
        return this.nums === [] || x > this.nums.length || y > this.nums[0].length;
    }
}

export = Matrix;
