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