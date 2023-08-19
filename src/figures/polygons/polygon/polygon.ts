import { Figure } from "../../figure";
import { IPolygon } from "../../../types";


/**
 * Polygon class. Polygon is a figure with straight sides of different length.
 * Wiki definition - {@link https://en.wikipedia.org/wiki/Polygon}
 */
export class Polygon extends Figure implements IPolygon {
    protected _sides: number[] = [];
    protected _sideNumber: number;

    /**
     * Creates a polygon
     * @param sideNumber Number of sides
     * @param sides Array of length sideNumber with length of every side. Sides should be ordered in clockwise order.
     * @throws RangeError if any:
     * sideNumber is negative;
     * sideNumber is not integer;
     * sides.length !== sideNumber;
     * any side is negative;
     * any side is greater than sum of the other sides;
     */
    constructor(sideNumber: number, sides: number[]) {
        super();
        this.checkForNegative(sideNumber, "Number of sides");
        if (!Number.isInteger(sideNumber)) {
            throw new RangeError("Number of sides should be integer");
        }
        this._sideNumber = sideNumber;
        this.sides = sides;
    }

    public get sides(): number[] {
        return [ ...this._sides ] ;
    }

    /**
     * Sets or gets sides to the new array
     * @throws RangeError if any:
     * sides.length !== sideNumber;
     * any side is negative;
     * any side is greater than sum of the other sides;
     */
    public set sides(sides: number[]) {
        if (sides.length !== this._sideNumber) {
            throw new RangeError(`Sides array size should be ${this._sideNumber}`);
        }
        if (sides.some((side) => side < 0)) {
            throw new RangeError("Sides cannot be negative");
        }
        if (!Polygon.canExist(sides)) {
            throw new RangeError("Some side is greater than sum of the others");
        }
        this._sides.length = 0;
        this._sides = [ ...sides ];
        this.calculatePerimeter();
        this.calculateArea();
    }

    /**
     * Check whenever a convex polygon can be built out of polygonSides array
     * @param polygonSides Array of sides of a potential polygon
     * @returns Can a convex polygon be built out of that sides
     */
    public static canExist(polygonSides: number[]): boolean {
        const allSidesSum = polygonSides.reduce((sum, sides) => sum + sides, 0);
        for (let sideIndex = 0; sideIndex < polygonSides.length; sideIndex++) {
            if (allSidesSum - polygonSides[sideIndex] < polygonSides[sideIndex]) {
                return false;
            }
        }
        return true;
    }

    /**
     * Calculates perimeter of the polygon as sum of all sides.
     */
    protected calculatePerimeter(): void {
        this._perimeter = this._sides.reduce((sum, side) => sum + side, 0);
    }

    /**
     * At the current moment it cannot calculate area of a random polygon so area is 0.
     */
    protected calculateArea(): void {
        this._area = 0;
    }
}
