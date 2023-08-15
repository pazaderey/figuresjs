import { Figure } from "../figure";


export class Triangle extends Figure {
    private _sides: [number, number, number];

    constructor(
        side1: number,
        side2: number,
        side3: number,
    ) {
        super();
        if (!Triangle.canBeTriangle(side1, side2, side3)) {
            throw new RangeError("Cannot build a triangle out of these sides");
        }
        this._sides = [side1, side2, side3];
        this.calculatePerimeter();
        this.calculateArea();
    }

    private calculateArea(): void {
        // Heron's formula
        const halfPerimeter = this.perimeter / 2;
        this._area = Math.sqrt(halfPerimeter * this._sides.reduce((acc, side) => acc * (halfPerimeter - side), 1));
    }
    
    private calculatePerimeter(): void {
        this._perimeter = this._sides.reduce((acc, side) => acc + side, 0);
    }

    static canBeTriangle(
        side1: number,
        side2: number,
        side3: number,
    ): boolean {
        return (
            side1 < side2 + side3 &&
            side2 < side3 + side1 &&
            side3 < side1 + side2
        );
    }
}
