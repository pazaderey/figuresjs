import { Polygon } from "../polygon";


export class RegularPolygon extends Polygon {
    protected _sideLength: number;

    constructor(sideNumber: number, sideLength: number) {
        super(sideNumber, new Array(sideNumber).fill(sideLength));
        this.sideLength = sideLength;
    }

    public get sides(): number[] {
        return new Array(this._sideNumber).fill(this._sideLength);
    }

    public set sides(newSides: number[]) {
        super.sides = newSides;
        this.sideLength = this._sides[0];
        this._sides.length = 0;
    }

    public get sideLength(): number {
        return this._sideLength;
    }
    
    public set sideLength(newSideLength: number) {
        this.checkForNegative(newSideLength, "Side length");
        this._sideLength = newSideLength;
        this.calculateArea();
        this.calculatePerimeter();
    }
    
    protected calculateArea(): void {
        this._area = (1 / 4) * this._sideNumber * (this._sideLength ** 2) * (1 / Math.tan(Math.PI / this._sideNumber));
    }

    protected calculatePerimeter(): void {
        this._perimeter = this._sideNumber * this._sideLength;
    }
}
