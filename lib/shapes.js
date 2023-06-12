class Shape {
    constructor() {
        this.color = null;
    }
    setColor(color) {
        this.color = color;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150,50 50,150 250,150" style="fill:${this.color}" />`;
    }
}

module.exports =
{
    Shape,
    Triangle,
    // Circle,
    // Square,
};