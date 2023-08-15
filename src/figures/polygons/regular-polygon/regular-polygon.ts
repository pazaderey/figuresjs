import { Polygon } from "../polygon";


export class RegularPolygon extends Polygon {
    private _sideLength: number;
    private _corners: number;

    constructor(
        sideLength: number,
        corners: number,
    ) {
        if (sideLength < 0) {
            throw new RangeError("Side length cannot be negative");
        }
        super(corners, new Array<number>(corners));
        this._sides.length = 0;
        this._sideLength = sideLength;
        this._corners = corners;
        this.calculateArea();
    }
    
    set sideLength(newSideLength: number) {
        if (newSideLength < 0) {
            throw new RangeError("Side length cannot be negative");
        }
        this._sideLength = newSideLength;
        this.calculateArea();
        this.calculatePerimeter();
    }

    get sideLength(): number {
        return this._sideLength;
    }

    /** @override */
    protected calculateArea(): void {
        this._area = (1 / 4) * this._corners * (this._sideLength ** 2) * (1 / Math.tan(Math.PI / this._corners));
    }

    /** @override */
    protected calculatePerimeter(): void {
        this._perimeter = this._corners * this._sideLength;
    }
}
