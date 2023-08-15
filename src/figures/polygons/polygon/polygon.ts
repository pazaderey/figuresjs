import { Figure } from "../../figure";

export abstract class Polygon extends Figure {
    protected _sides: number[] = [];

    constructor(sideNumber: number, sides: number[]) {
        super();
        this.checkForNegative(sideNumber, "Number of sides");
        if (!Number.isInteger(sideNumber)) {
            throw new RangeError("Number of sides should be integer");
        }
        if (sideNumber !== sides.length) {
            throw new Error("Side number should be equal sides array size");
        }
        if (sides.some((side) => side < 0)) {
            throw new RangeError("Sides cannot be negative");
        }
        this._sides = sides;
        this.calculatePerimeter();
    }

    get sides(): number[] {
        return this._sides;
    }

    /** @override */
    protected calculatePerimeter(): void {
        this._perimeter = this._sides.reduce((acc, side) => acc + side, 0);
    }
}
