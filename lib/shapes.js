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
        return `<polygon height="100%" width="100%" points="150,50 50,150 250,150" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" width="200" height="200" fill="${this.color}" />`;
    }
}

module.exports =
{
    Shape,
    Triangle,
    Circle,
    Square,
};