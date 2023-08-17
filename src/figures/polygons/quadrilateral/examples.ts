import { Quadrilateral } from "./quadrilateral";

// TODO: write tsdocs
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
        super([...sides, ...sides]);
        this.height = height;
    }

    set height(newHeight: number) {
        this.checkForNegative(newHeight, "Height");
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
        super(sides);
        this.height = height;
    }

    set height(newHeight: number) {
        this.checkForNegative(newHeight, "Height");
        this._height = newHeight;
        this.calculateArea();
    }

    get height(): number {
        return this._height
    }

    public static isIsoscelesTrapezoid(trapezoid: Trapezoid): boolean {
        const uniqueSizes = new Set(trapezoid.sides);
        return uniqueSizes.size === 3;
    }

    /** @override */
    protected calculateArea(): void {
        this._area = this._height * (this._sides[0] + this._sides[2]) / 2;
    }
}

export class Kite extends Quadrilateral {
    private _diagonals: [number, number];

    constructor(sides: [number, number], diagonals: [number, number]) {
        super([ ...sides, ...sides ]);
        diagonals.forEach((d) => this.checkForNegative(d, "Diagonal"));
        this._diagonals = diagonals;
    }

    /** @override */
    protected calculateArea(): void {
        this._area = this._diagonals[0] * this._diagonals[1] / 2;
    }
}

export class Rhombus extends Quadrilateral {
    private _diagonals: [number, number];

    constructor(side: number, diagonals: [number, number]) {
        super([side, side, side, side]);
        diagonals.forEach((d) => this.checkForNegative(d, "Diagonal"));
        this._diagonals = diagonals;
    }

    /** @override */
    protected calculateArea(): void {
        this._area = this._diagonals[0] * this._diagonals[1] / 2;
    }
}