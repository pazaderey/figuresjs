# FiguresJS

FiguresJS contains implementations for some simple 2D geometrical figures.

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
$ npm install figuresjs
```

## Features

 * Figure area and perimeter calculation
 * Figure area and perimeter caching
 * Easy to inherit new figures

## Examples

Circle class:
```ts
const circle = new Circle(5);

const circleArea = circle.area; // pi * 5 ^ 2

circle.radius = 7;

const circlePerimeter = circle.perimeter; // 2 * pi * 7
```

Square class:
```ts
const square = new Square(4);

const squareDiagonal = square.diagonal; // 4 * sqrt(2)
```

And so on.

## New Figures

To implement new figure, that is not in any examples provided, you should
extend nearest class. Than you should implement calculateArea and calculatePerimeter (if needed) methods
corresponding to the figure being implemented.

Example:
```ts
class Rhombus extends Quadrilateral {
    private _diagonals: [number, number];

    constructor(side: number, diagonals: [number, number]) {
        super([side, side, side, side]);
        diagonals.forEach((d) => this.checkForNegative(d, "Diagonal"));
        this._diagonals = diagonals;
    }

    protected calculateArea(): void {
        this._area = this._diagonals[0] * this._diagonals[1] / 2;
    }
}
```
