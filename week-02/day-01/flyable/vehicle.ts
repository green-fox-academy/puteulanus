abstract class Vehicle {
    protected name: string;
    protected width: number;
    protected height: number;

    constructor(name: string, width: number, height: number) {
        this.name = name;
        this.width = width;
        this.height = height;
    }
}

export = Vehicle;