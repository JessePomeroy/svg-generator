const { Shape, Triangle, Circle, Square } = require('./shapes');

describe('Shape', () => {
    it(`should set the color's shape`, () => {
        const shape = new Shape();
        shape.setColor('green');
        expect(shape.color).toEqual('green');
    });
});

describe('Triangle', () => {
    it(`should render a black triangle`, () => {
        const shape = new Triangle();
        shape.setColor('black');
        const expected = `<polygon points="150,50 50,150 250,150" style="fill:black" />`;
        expect(shape.render()).toEqual(expected);
    });
});

describe('Circle', () => {
    it(`should render a circle`, () => {
        const shape = new Circle();
        shape.setColor('blue');
        const expected = `<circle cx="150" cy="100" r="75" style="fill:blue" />`;
        expect(shape.render()).toEqual(expected);
    });
});