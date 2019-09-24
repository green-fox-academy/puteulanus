import Tree = require('./iTree')

class BinaryTree implements Tree {

    public father: Tree;
    public left: Tree;
    public right: Tree;
    public value: string;

    empty(): boolean {
        return;
    }

    add(value: string): void {

    }

    remove(value: string): void {

    }

    search(value: string): boolean {
        return;
    }
}