const { Shape, Triangle, Circle, Square } = require('./shapes');

describe('Shape', () => {
    it(`should set the color's shape`, () => {
        const shape = new Shape();
        shape.setColor('green');
        expect(shape.color).toEqual('green');
    });
});