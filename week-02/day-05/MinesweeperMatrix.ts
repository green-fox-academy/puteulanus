import Matrix = require("./Matrix");
import Game = require("./Game");

class MinesweeperMatrix implements Game{

    public matrix = new Matrix();
    public status = new Matrix();

    private failed: boolean = false;


    toString(): string {
        let output_matrix = new Matrix();
        return;
    }

    end(): string {
        if (this.failed) {
            return 'You lose!';
        } else {
            return 'You win!';
        }
    }

    isFailed(): boolean {
        return this.failed;
    }

    init(paras: Array<string>): void {
        let size = parseInt(paras[0]);
        let mines = parseInt(paras[1]);
        this.matrix.create(size, size);
        this.status.create(size, size);

        let mines_text = (MinesweeperMatrix.repeat('1',mines) + MinesweeperMatrix.repeat('0', size * size - mines)).split('').sort(
            () => Math.random() - 0.5
        ).forEach((num,index) => {
            if (num === '1') {
                this.matrix.set(Math.ceil((index+1)/size), Math.ceil((index+1) % size) + 1, '1');
            }
        } )
    }

    pre_init(): Array<[string, Function]> {
        return [
          ['How big the gameplay should be',(text_num: string, input: any) => {
            let num = parseInt(text_num);
            if (isNaN(num) || num < 0 || num > 20) {
                return 'That\'s not a valid number for the dimension!';
            } else {
                return '';
            }
          }],
          ['How many mines you\'d like to find',(text_num: string, inputs: Array<string>) => {
            let num = parseInt(text_num);
              if (isNaN(num) || num < 0 || num > 20) {
                  return 'That\'s not a valid number for the dimension!';
              } else if (num > parseInt(inputs[0])) {
                  return 'There\'s too many mines!';
              } else {
                  return '';
              }
          }]
        ];
    }

    input(text: string): string {
        if (text.length !== 2) {
            return;
        }

        let x = text[0].toUpperCase().charCodeAt(0) - 64;
        let y = parseInt(text[1]);

        if (this.status.xy_not_allow(x, y)) {
            return;
        }

        this.status.set(x ,y, 1);
        if (this.matrix.get(x, y) === 1) {
            this.failed = true;
        } else {
            return this.toString();
        }

    }

    private static repeat(text: string, num: number) {
        let result = '';
        while(num--) {
            result += text;
        }
        return result;
    }


}

export = MinesweeperMatrix;