import { Quadrilateral } from "./quadrilateral";


export class Rectangle extends Quadrilateral {
    constructor(sides: [number, number]) {
        super([...sides, ...sides]);
        this.calculateArea();
    }

    private calculateArea(): void {
        this._area = this._sides[0] * this._sides[1];
    }
}

export class Parallelogram extends Quadrilateral {
    private _height: number;
    
    constructor(sides: [number, number], height: number) {
        super([...sides, ...sides]);
        if (height < 0) {
            throw new RangeError("Height cannot be negative");
        }
        this._height = height;
        this.calculateArea();
    }

    set height(newHeight: number) {
        if (newHeight < 0) {
            throw new RangeError("Height cannot be negative");
        }
        this._height = newHeight;
        this.calculateArea();
    }

    get height(): number {
        return this._height
    }

    private calculateArea(): void {
        this._area = this._height * this._sides[0];
    }
}