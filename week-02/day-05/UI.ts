import MinesweeperMatrix = require("./MinesweeperMatrix");
import Game = require("./Game");
import readline = require('readline');


class UI {
    private game: Game;

    constructor(game: Game) {
        this.game = game;
    }

    main() {

    }

    public gameInit() {
        let arr = this.game.pre_init();
        let inputs: string[] = [];
        for (let paraSet of arr) {
            let rl = readline.createInterface({
                input:process.stdin,
                output:process.stdout
            });

            console.log(paraSet[0]);
            rl.on('line', (answer) => {
                inputs.push(answer);
                console.log(inputs);
                rl.close();
            });



            //let output = paraSet[1](input, results);
            //results.push([input,output]);
        }
    }
}

let a = new UI(new MinesweeperMatrix());

a.gameInit();
