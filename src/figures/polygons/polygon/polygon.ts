import { Figure } from "../../figure";

export abstract class Polygon extends Figure {
    protected _sides: number[] = [];

    constructor(sideNumber: number) {
        super();
        if (sideNumber < 0) {
            throw new RangeError("Number of sides cannot be negative");
        }
        if (!Number.isInteger(sideNumber)) {
            throw new RangeError("Number of sides should be integer");
        }
    }

    get sides(): number[] {
        return this._sides;
    }

    protected calculatePerimeter(): void {
        this._perimeter = this._sides.reduce((acc, side) => acc + side, 0);
    }
}
