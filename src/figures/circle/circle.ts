import { Figure } from "../figure";


export class Circle extends Figure {
    private _radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    public get radius(): number {
        return this._radius;
    }
    
    public set radius(newRadius: number) {
        this.checkForNegative(newRadius, "Radius");
        this._radius = newRadius;
        this.calculateArea();
        this.calculatePerimeter();
    }

    public get diameter(): number {
        return this._radius * 2;
    }

    protected calculateArea(): void {
        this._area = Math.PI * (this._radius ** 2);
    }

    protected calculatePerimeter(): void {
        this._perimeter = 2 * Math.PI * this._radius;
    }
}
