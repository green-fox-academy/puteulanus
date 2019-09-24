import LinkedList = require('./iLinkedList');
import Queue = require('./iQueue');


class Node implements LinkedList, Queue {

    public first: {
        index: number,
        value: string,
        next?: any
    }

    private size_num: number = 0;

    private loop(enter_point: Object, stop: Function, operation: Function, pre_operation?: Function, pre_node?: Object):any {
        if (stop(enter_point) === true) {
            return [operation(enter_point),pre_operation(pre_node)];
        } else {
            return this.loop(enter_point['next'], stop, operation, pre_operation, enter_point);
        }
    }

    add(value: string, index?: number): void {
        if (this.first === undefined) {
            this.first = {index: index, value: value};
            this.size_num++;
        } else {

            let stop: Function;
            if (index === undefined) {
                stop = node => node['next'] === undefined;
            } else {
                stop = node => node['next'] === undefined
                || (node['next']['index'] >= index &&
                node['index'] < index)
            }

            this.loop(this.first,
                stop,
                node => {
                    let t_next = node['next'];
                    if (node['next'] === undefined || node['next']['index'] !== index) {
                        node['next'] = {index: index,
                                        value: value,
                                        next: t_next};
                        this.size_num++;
                    } else {
                        node['next'] = {index: index,
                                        value: value,
                                        next: t_next['next']};
                        this.size_num++;
                    }
                return undefined;
                }, () => {}
            )
        }
    }

    get(index: number): string {
        return this.loop(
            this.first,
            node => node['index'] === index || node['next'] === undefined,
            node => node['index'] === index ? node['value'] : undefined,
            () => {}
        )[0]
    }

    removeItem(value: string): void {
        if (this.first['value'] === value) {
            this.first = this.first['next'];
            this.size_num--;
        }

        this.loop(this.first,
            node => node['value'] === value || node['next'] === undefined,
            () => {},
            pre_node => {
                if (pre_node['next']['value'] === value) {
                    pre_node['next'] = pre_node['next']['next'];
                    this.size_num--;
                }
            }
        )
    }

    remove(index?: number): string {

        if (index === undefined) {
            if (this.first === undefined) {
                return undefined;
            } else {
                let text = this.first['value'];
                this.first = this.first['next'];
                return text;
            }
        }

        if (this.first['index'] === index) {
            let text = this.first['value'];
            this.first = this.first['next'];
            this.size_num--;
            return text;
        }

        return this.loop(this.first,
            node => node['index'] === index || node['next'] === undefined,
            () => {},
            pre_node => {
                if (pre_node['next']['index'] === index) {
                    let text = pre_node['next']['value'];
                    pre_node['next'] = pre_node['next']['next'];
                    this.size_num--;
                    return text;
                } else {
                    return undefined;
                }
            }
        )[1]
    }

    size(): number {
        return this.size_num;
    }

    empty(): boolean {
        return this.first === undefined;
    }
    peek(): string {
        return this.empty() ? undefined : this.first['value'];
    }
}
