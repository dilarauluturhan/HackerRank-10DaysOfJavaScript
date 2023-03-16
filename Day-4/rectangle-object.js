function Rectangle(a, b) {
    const rec = {
        length: a,
        width: b,
        perimeter: 2 * (a + b),
        area: a * b
    }
    return rec;
}