import { Figure } from "../../figure";


export class Polygon extends Figure {
    protected _sides: number[] = [];
    protected _sideNumber: number;

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
        return this._sides;
    }

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

    public static canExist(polygonSides: number[]): boolean {
        const allSidesSum = polygonSides.reduce((sum, sides) => sum + sides, 0);
        for (let sideIndex = 0; sideIndex < polygonSides.length; sideIndex++) {
            if (allSidesSum - polygonSides[sideIndex] < polygonSides[sideIndex]) {
                return false;
            }
        }
        return true;
    }

    protected calculatePerimeter(): void {
        this._perimeter = this._sides.reduce((sum, side) => sum + side, 0);
    }

    protected calculateArea(): void {
        this._area = 0;
    }
}
