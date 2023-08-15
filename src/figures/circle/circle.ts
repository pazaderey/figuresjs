import { Figure } from "../figure";


export class Circle extends Figure {
    private _radius = 0;

    constructor(radius: number) {
        super();
        this.radius = radius;
        this.calculatePerimeter();
        this.calculateArea();
    }

    get radius(): number {
        return this._radius;
    }
    
    set radius(newRadius: number) {
        this.checkForNegative(newRadius, "Radius");
        this._radius = newRadius;
        this.calculateArea();
        this.calculatePerimeter();
    }

    get diameter(): number {
        return this._radius * 2;
    }

    /** @override */
    protected calculateArea(): void {
        this._area = Math.PI * (this._radius ** 2);
    }

    /** @override */
    protected calculatePerimeter(): void {
        this._perimeter = 2 * Math.PI * this._radius;
    }
}
