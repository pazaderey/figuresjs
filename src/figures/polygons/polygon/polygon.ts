import { Figure } from "../../figure";


export class Polygon extends Figure {
    protected _sides: number[] = [];
    private _sideNumber: number;

    constructor(sideNumber: number, sides: number[]) {
        super();
        this.checkForNegative(sideNumber, "Number of sides");
        if (!Number.isInteger(sideNumber)) {
            throw new RangeError("Number of sides should be integer");
        }
        this._sideNumber = sideNumber;
        this.sides = sides;
    }

    get sides(): number[] {
        return this._sides;
    }

    set sides(sides: number[]) {
        if (sides.length !== this._sideNumber) {
            throw new RangeError(`Sides array size should be ${this._sideNumber}`);
        }
        if (sides.some((side) => side < 0)) {
            throw new RangeError("Sides cannot be negative");
        }
        this._sides.length = 0;
        this._sides = sides;
        this.calculatePerimeter();
        this.calculateArea();
    }

    public static canBePolygon(polygon: Polygon): boolean {
        // TODO: Implement canBePolygon
        return true;
    }

    /** @override */
    protected calculatePerimeter(): void {
        this._perimeter = this._sides.reduce((acc, side) => acc + side, 0);
    }
}
