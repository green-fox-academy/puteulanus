import MinesweeperMatrix = require("./MinesweeperMatrix");
import Game = require("./Game");



class UI {
    private game: Game;

    constructor(game: Game) {
        this.game = game;
    }

    main() {

    }

    public gameInit() {
        let arr = this.game.pre_init();
        let results: Array<[string, string]> = []; // input output
        for (let paraSet of arr) {
            console.log(paraSet[0]);
        }
    }
}

let a = new UI(new MinesweeperMatrix());

a.gameInit();
