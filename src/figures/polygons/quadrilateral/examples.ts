import { Quadrilateral } from "./quadrilateral";

/**
 * Rectangle class. Rectangle is a quadrilateral with four right angles.
 * Wiki definition - {@link https://en.wikipedia.org/wiki/Rectangle}
 */
export class Rectangle extends Quadrilateral {
    /**
     * Creates a rectangle
     * @param sides Width and height of a rectangle
     */
    constructor(sides: [number, number]) {
        super([...sides, ...sides]);
    }

    /**
     * Calculates area of a rectangle
     */
    protected calculateArea(): void {
        this._area = this._sides[0] * this._sides[1];
    }
}

/**
 * Parallelogram class. Parallelogram is a simple quadrilateral with two pairs of parallel sides.
 * Wiki definition - {@link https://en.wikipedia.org/wiki/Parallelogram}
 */
export class Parallelogram extends Quadrilateral {
    private _height: number;
    
    /**
     * Creates a parallelogram
     * @param sides Two different sides of a parallelogram
     * @param height Height of a parallelogram
     * Height here is perpendicular to the first side as here:
     * {@link https://en.wikipedia.org/wiki/Parallelogram#/media/File:ParallelogramArea.svg} where h is height and b is sides[0]
     */
    constructor(sides: [number, number], height: number) {
        super([...sides, ...sides]);
        this.height = height;
    }

    /**
     * Sets or gets height of a parallelogram
     * @throws RangeError if new heights is negative
     */
    set height(newHeight: number) {
        this.checkForNegative(newHeight, "Height");
        this._height = newHeight;
        this.calculateArea();
    }

    get height(): number {
        return this._height
    }

    /**
     * Calculates area of a parallelogram. 
     * {@link https://en.wikipedia.org/wiki/Parallelogram#/media/File:ParallelogramArea.svg} where h is _height and b is _sides[0]
     */
    protected calculateArea(): void {
        this._area = this._height * this._sides[0];
    }
}

/**
 * Trapezoid class. Trapezoid is a quadrilateral that has at least one pair of parallel sides.
 * Wiki definition - {@link https://en.wikipedia.org/wiki/Trapezoid}
 */
export class Trapezoid extends Quadrilateral {
    private _height: number;
    
    /**
     * Creates a new trapezoid
     * @param sides 4 sides of the trapezoid. Parallel sides are considered sides[0] and sides[2]
     * @param height Height of a trapezoid. This is a distance between two parallel sides
     */
    constructor(sides: [number, number, number, number], height: number) {
        super(sides);
        this.height = height;
    }

    /**
     * Sets or gets trapezoid height
     * @throws RangeError if new height is negative
     */
    set height(newHeight: number) {
        this.checkForNegative(newHeight, "Height");
        this._height = newHeight;
        this.calculateArea();
    }

    get height(): number {
        return this._height
    }

    /**
     * Checks whenever the trapezoid is Isosceles.
     * Wiki definition - {@link https://en.wikipedia.org/wiki/Isosceles_trapezoid}
     * @param trapezoid Trapezoid to check
     * @returns If a trapezoid is Isosceles
     */
    public static isIsoscelesTrapezoid(trapezoid: Trapezoid): boolean {
        const uniqueSizes = new Set(trapezoid.sides);
        return uniqueSizes.size === 3;
    }

    /**
     * Calculates area of a trapezoid
     * Wiki definition - {@link https://en.wikipedia.org/wiki/Trapezoid#Area} where a, b, h are _sides[0], sides[2], _height respectively.
     */
    protected calculateArea(): void {
        this._area = this._height * (this._sides[0] + this._sides[2]) / 2;
    }
}
