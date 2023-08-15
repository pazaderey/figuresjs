import { Figure } from "../figure";


export class Circle extends Figure {
    constructor(
        private _radius: number,
    ) {
        super();
        this.calculateArea();
        this.calculatePerimeter();
    }

    get radius(): number {
        return this._radius;
    }

    set radius(newRadius: number) {
        if (newRadius < 0) {
            throw new RangeError("Radius cannot be negative");
        }
        this._radius = newRadius;
        this.calculateArea();
        this.calculatePerimeter();
    }

    get diameter(): number {
        return this._radius * 2;
    }

    private calculateArea(): void {
        this._area = Math.PI * (this._radius ** 2);
    }

    private calculatePerimeter(): void {
        this._perimeter = 2 * Math.PI * this._radius;
    }
}
