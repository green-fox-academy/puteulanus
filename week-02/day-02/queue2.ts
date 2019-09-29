import Stack = require("./stack2");
import iQueue = require("./iQueue");

class Queue implements iQueue{

    private stack_1 = new Stack();
    private stack_2 = new Stack();

    add(value: string): void {
        this.stack_1.push(value);
    }

    empty(): boolean {
        return this.stack_1.empty();
    }

    peek(): string {
        return this.get();

    }

    remove(): string {
        return this.get(true);
    }

    private get(doRemove: boolean = false): string {
        if (this.empty()) {
            return undefined;
        }
        while(true) {
            let tmp = this.stack_1.pop();
            if (tmp === undefined) {
                break;
            }
            this.stack_2.push(tmp);
        }

        let text = '';
        if (doRemove) {
            text = this.stack_2.pop();
        } else {
            text = this.stack_2.peek();
        }

        while(true) {
            let tmp = this.stack_2.pop();
            if (tmp === undefined) {
                break;
            }
            this.stack_1.push(tmp);
        }

        return text;
    }

}