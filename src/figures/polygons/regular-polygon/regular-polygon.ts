import { Polygon } from "../polygon";
import { IRegularPolygon } from "../../../types";


/**
 * Regular polygon class. Regular polygon is a polygon that is direct equiangular (all angles are equal in measure) and equilateral (all sides have the same length).
 */
export class RegularPolygon extends Polygon implements IRegularPolygon {
    protected _sideLength: number;

    /**
     * Creates a regular polygon
     * @param sideNumber Number of sides
     * @param sideLength Length of each side
     * @throws RangeError if any:
     * sideNumber is negative;
     * sideNumber is not integer;
     * sideLength is negative;
     */
    constructor(sideNumber: number, sideLength: number) {
        super(sideNumber, new Array(sideNumber).fill(sideLength));
        this.sideLength = sideLength;
    }

    /**
     * returns new array in order not to save in memory array of equal values.
     */
    public get sides(): number[] {
        return new Array(this._sideNumber).fill(this._sideLength);
    }

    /**
     * Sets or gets sides of the regular polygon.
     * @throws RangeError if any:
     * newSides.length !== sideNumber in the constructor;
     * any side is negative;
     * any side is greater than sum of the other sides;
     */
    public set sides(newSides: number[]) {
        if (new Set(newSides).size !== 1) {
            throw new RangeError("Sides of a regular polygon should be equal");
        }
        super.sides = newSides;
        this.sideLength = this._sides[0];
        this._sides.length = 0; // there is no sense in saving array of equal values if we know its length
    }

    public get sideLength(): number {
        return this._sideLength;
    }
    
    /**
     * Sets or gets side length
     * @throws RangeError if new side length is negative
     */
    public set sideLength(newSideLength: number) {
        this.checkForNegative(newSideLength, "Side length");
        this._sideLength = newSideLength;
        this.calculateArea();
        this.calculatePerimeter();
    }
    
    /**
     * Calculates area of a regular polygon. 
     * Wiki definition - {@link https://en.wikipedia.org/wiki/Regular_polygon#Area}
     * The 3rd formula is taken, where n, s are _sideNumber, _sideLength respectively
     */
    protected calculateArea(): void {
        this._area = (1 / 4) * this._sideNumber * (this._sideLength ** 2) * (1 / Math.tan(Math.PI / this._sideNumber));
    }

    protected calculatePerimeter(): void {
        this._perimeter = this._sideNumber * this._sideLength;
    }
}
