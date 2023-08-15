import { Polygon } from "../polygon";


export class RegularPolygon extends Polygon {
    private _sideLength: number;
    private _corners: number;

    constructor(
        sideLength: number,
        corners: number,
    ) {
        super(corners, new Array<number>(corners));
        this._sides.length = 0;
        this.checkForNegative(sideLength, "Side length");
        this._sideLength = sideLength;
        this._corners = corners;
        this.calculateArea();
    }
    
    set sideLength(newSideLength: number) {
        this.checkForNegative(newSideLength, "Side length");
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
