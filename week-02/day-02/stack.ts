import IStack = require('./iStack')

class Stack implements IStack {
    private list: string[] = [];

    empty(): boolean {
        return this.list.length === 0;
    }

    peek(): string {
        return this.list[this.list.length - 1];
    }

    push(value: string): void {
        this.list.push(value);
    }

    pop(): string {
        return this.list.splice(this.list.length - 1, 1)[0];
    }
}