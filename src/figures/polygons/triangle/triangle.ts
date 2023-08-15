import { Polygon } from "../polygon/polygon";


export class Triangle extends Polygon {
    constructor(sides: [number, number, number]) {
        super(3, sides);
        if (!Triangle.canBeTriangle(...sides)) {
            throw new RangeError("Cannot build a triangle out of those sides");
        }
        this.calculateArea();
    }

    static canBeTriangle(
        side1: number,
        side2: number,
        side3: number,
    ): boolean {
        return (
            side1 < side2 + side3 &&
            side2 < side3 + side1 &&
            side3 < side1 + side2
        );
    }

    static isRightTriangle(triangle: Triangle): boolean {
        const sides = Array.from(triangle.sides).sort((a, b) => b - a);
        const hypotenuse = sides[0];
        const [leg1, leg2] = sides.slice(1);
        return (hypotenuse ** 2) === ((leg1 ** 2) + (leg2 ** 2));
    }

    /** @override */
    protected calculateArea(): void {
        // Heron's formula
        const halfPerimeter = this.perimeter / 2;
        this._area = Math.sqrt(halfPerimeter * this._sides.reduce((acc, side) => acc * (halfPerimeter - side), 1));
    }

}
