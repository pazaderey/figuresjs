import { Figure } from "../figure";


export class RegularPolygon extends Figure {
    private _corners: number;
    private _side: number;

    constructor(
        side: number,
        corners: number,
    ) {
        super();
        if (side < 0 || corners < 0) {
            throw new RangeError("Parameters cannot be negative");
        }
        if (!Number.isInteger(corners)) {
            throw new RangeError("Number of corners should be integer");
        }
        this._side = side;
        this._corners = corners;
        this.calculateArea();
        this.calculatePerimeter();
    }
    
    set side(newSide: number) {
        if (newSide < 0) {
            throw new RangeError("Side cannot be negative");
        }
        this._side = newSide;
        this.calculateArea();
        this.calculatePerimeter();
    }

    private calculateArea(): void {
        this._area = (1 / 4) * this._corners * (this._side ** 2) * (1 / Math.tan(Math.PI / this._corners));
    }

    private calculatePerimeter(): void {
        this._perimeter = this._corners * this._side;
    }
}
