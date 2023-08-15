import { Quadrilateral } from "./quadrilateral";


export class Rectangle extends Quadrilateral {
    constructor(sides: [number, number]) {
        super([...sides, ...sides]);
        this.calculateArea();
    }

    protected calculateArea(): void {
        this._area = this._sides[0] * this._sides[1];
    }
}

export class Parallelogram extends Quadrilateral {
    private _height: number;
    
    constructor(sides: [number, number], height: number) {
        if (height < 0) {
            throw new RangeError("Height cannot be negative");
        }
        super([...sides, ...sides]);
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

    /** @override */
    protected calculateArea(): void {
        this._area = this._height * this._sides[0];
    }
}

export class Trapezoid extends Quadrilateral {
    private _height: number;
    
    constructor(sides: [number, number, number, number], height: number) {
        if (height < 0) {
            throw new RangeError("Height cannot be negative");
        }
        super(sides);
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

    /** @override */
    protected calculateArea(): void {
        this._area = this._height * (this._sides[0] + this._sides[2]) / 2;
    }
}

export class Kite extends Quadrilateral {
    constructor(sides: [number, number, number, number]) {
        super(sides);
    }
}