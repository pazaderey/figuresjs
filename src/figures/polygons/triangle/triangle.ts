import { Polygon } from "../polygon/polygon";
import { sideConsts } from "../../../consts";


export class Triangle extends Polygon {
    constructor(sides: number[]) {
        super(sideConsts.TRIANGLE_SIDES, sides);
        this.calculateArea();
    }

    public static isRightTriangle(triangle: Triangle): boolean {
        const sides = Array.from(triangle.sides).sort((a, b) => b - a);
        const hypotenuse = sides[0];
        const [leg1, leg2] = sides.slice(1);
        return (hypotenuse ** 2) === ((leg1 ** 2) + (leg2 ** 2));
    }

    /** @override */
    protected calculateArea(): void {
        // Heron's formula
        const halfPerimeter = this.perimeter / 2;
        this._area = Math.sqrt(halfPerimeter * this._sides.reduce((production, side) => production * (halfPerimeter - side), 1));
    }

}
