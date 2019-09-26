interface Game {
    pre_init(): Array<[string, Function]>;
    init(paras: Array<string>): void;
    isFailed(): boolean;
    input(text: string): string;
    end(): string;
}

export = Game;