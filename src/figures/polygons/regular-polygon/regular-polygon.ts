import { Polygon } from "../polygon";


export class RegularPolygon extends Polygon {
    private _sideLength: number;
    private _corners: number;

    constructor(
        sideLength: number,
        corners: number,
    ) {
        if (sideLength < 0) {
            throw new RangeError("sideLength cannot be negative");
        }
        super(corners);
        this._sideLength = sideLength;
        this._corners = corners;
        this.calculateArea();
        this.calculatePerimeter();
    }
    
    set sideLength(newSideLength: number) {
        if (newSideLength < 0) {
            throw new RangeError("sideLength cannot be negative");
        }
        this._sideLength = newSideLength;
        this.calculateArea();
        this.calculatePerimeter();
    }

    private calculateArea(): void {
        this._area = (1 / 4) * this._corners * (this._sideLength ** 2) * (1 / Math.tan(Math.PI / this._corners));
    }

    protected calculatePerimeter(): void {
        this._perimeter = this._corners * this._sideLength;
    }
}
