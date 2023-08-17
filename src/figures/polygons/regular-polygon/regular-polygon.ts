import { Polygon } from "../polygon";


export class RegularPolygon extends Polygon {
    protected _sideLength: number;
    protected _corners: number;

    constructor(
        sideLength: number,
        corners: number,
    ) {
        super(0, []);
        this.checkForNegative(corners, "Number of corners");
        this._corners = corners;
        this.sideLength = sideLength;
    }
    
    public set sideLength(newSideLength: number) {
        this.checkForNegative(newSideLength, "Side length");
        this._sideLength = newSideLength;
        this.calculateArea();
        this.calculatePerimeter();
    }

    public get sideLength(): number {
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
