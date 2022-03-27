function setup() {
    createCanvas(1000, 500);

}

function draw() {
    background(0);
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let c = new Complex((x / width) * 4 - 3, (y / height) * 2 - 1);
            let z = new Complex(0, 0);
            let n = 0;
            while (n < 255 && z.abs() < 2) {
                z = z.mul(z).add(c);
                n++;
            }
            let bright = map(n, 0, 100, 0, 255);
            stroke(bright);
            point(x, y);
        }
    }
}

class Complex {
    constructor(re, im) {
        this.re = re;
        this.im = im;
    }

    abs() {
        return Math.sqrt(this.re * this.re + this.im * this.im);
    }

    mul(other) {
        const re = this.re * other.re - this.im * other.im;
        const im = this.re * other.im + this.im * other.re;
        return new Complex(re, im);
    }

    add(other) {
        return new Complex(this.re + other.re, this.im + other.im);
    }
}