import IQueue = require('./iQueue')

class Queue implements IQueue {
    private list: string[] = [];

    empty(): boolean {
        return this.list.length === 0;
    }

    peek(): string {
        return this.list[0];
    }

    add(value: string): void {
        this.list.push(value);
    }

    remove(): string {
        return this.list.splice(0,1)[0];
    }
}