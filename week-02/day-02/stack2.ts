import Node = require("./node");
import iStack = require("./iStack");

class Stack implements iStack {

    private node = new Node();

    empty(): boolean {
        return this.node.size() === 0;
    }

    peek(): string {
        if (this.empty()) {
            return undefined;
        }
        return this.node.get(this.node.size() - 1);
    }

    pop(): string {
        if (this.empty()) {
            return undefined;
        }
        return this.node.remove(this.node.size() - 1);
    }

    push(value: string): void {
        this.node.add(value);
    }

}

export = Stack;