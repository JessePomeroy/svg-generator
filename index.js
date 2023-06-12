const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes'); // using the shapes.js file to generate the svg file

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
        choices: ['Triangle', 'Circle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'please provide a color for your shape as a keyword or color hex code.',
        validate: (value) => { if (value) { return true } else { return `please do not leave blank.` } }
    },
];

const svgRender = ({ text, textColor, shape, shapeColor }) => {

    switch (shape) {
        case 'Triangle':
            const triangle = new Triangle();
            triangle.setColor(shapeColor);
            svg = triangle
            break;
        case 'Circle':
            const circle = new Circle();
            circle.setColor(shapeColor);
            svg = circle
            break;
        case 'Square':
            const square = new Square();
            square.setColor(shapeColor);
            svg = square
            break;
    }


    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${svg.render()}
    <text x="150" y="125" font-size="55" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>`;
};

inquirer.prompt(questions).then((answers) => {
    const logo = svgRender(answers);
    const savedSVG = './results/logo.svg';

    fs.writeFile(savedSVG, logo, (err) =>
        err ? console.error(err) : console.log('successfully created svg')
    );
})
    .catch((err) => console.error(err));

