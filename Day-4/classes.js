class Polygon {
    constructor(sides) {
        this.s = sides;
    }
    perimeter() {
        return this.s.reduce((a, b) => a + b);
    }
}
