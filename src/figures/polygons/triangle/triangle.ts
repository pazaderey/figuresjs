import { Polygon } from "../polygon/polygon";
import { sideConsts } from "../../../consts";

/**
 * Triangle class. Triangle is a polygon with 3 sides.
 * Wiki definition - {@link https://en.wikipedia.org/wiki/Triangle}
 */
export class Triangle extends Polygon {
    /**
     * Creates a triangle
     * @param sides Array of triangle sides. 
     */
    constructor(sides: number[]) {
        super(sideConsts.TRIANGLE_SIDES, sides);
    }

    /**
     * Checks if a triangle is right.
     * Wiki definition - {@link https://en.wikipedia.org/wiki/Right_triangle}
     * @param triangle Triangle to check
     * @returns If a triangle is right
     */
    public static isRightTriangle(triangle: Triangle): boolean {
        const sides = Array.from(triangle.sides).sort((a, b) => b - a);
        const hypotenuse = sides[0];
        const [leg1, leg2] = sides.slice(1);
        return (hypotenuse ** 2) === ((leg1 ** 2) + (leg2 ** 2));
    }

    /**
     * Calculates area of a triangle, using Heron's formula.
     * Wiki definition - {@link https://en.wikipedia.org/wiki/Heron%27s_formula}
     */
    protected calculateArea(): void {
        const halfPerimeter = this.perimeter / 2;
        this._area = Math.sqrt(halfPerimeter * this._sides.reduce((production, side) => production * (halfPerimeter - side), 1));
    }

}
