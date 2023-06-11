const inquirer = require('inquirer');
const fs = require('fs');
const { Shape, Triangle, Circle, Square } = require('./lib/shapes.js'); // using the shapes.js file to generate the svg file

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'please provide a name for your project of up to three characters.',
        validate: (input) => input.length <= 3,
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'please provide a color for your text.',
        validate: (value) => { if (value) { return true } else { return `please do not leave blank.` } }
    },
    {
        type: 'list',
        name: 'shape',
        message: 'please choose a shape from the list.',
        choices: ['triangle', 'circle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'please provide a color for your shape as a keyword or color hex code.',
        validate: (value) => { if (value) { return true } else { return `please do not leave blank.` } }
    },
];

