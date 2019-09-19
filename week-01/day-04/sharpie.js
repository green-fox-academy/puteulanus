class Sharpie {
    constructor(color,width,inkAmount=100.0) {
        this.color = color
        this.width = width
        this.inkAmount = inkAmount
    }

    use() {
        this.inkAmount--;
    }
}

let a = new Sharpie('red', 10.0);
a.use()

module.exports = Sharpie;