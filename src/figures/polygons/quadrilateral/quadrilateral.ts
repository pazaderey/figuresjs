import { Polygon } from "../polygon/polygon";


export class Quadrilateral extends Polygon {
    constructor(sides: [number, number, number, number]) {
        super(4);
        if (sides.some((side) => side < 0)) {
            throw new RangeError("Side cannot be negative");
        }
        this._sides = sides;
        this.calculatePerimeter();
    }

    get area(): never {
        throw new Error("Cannot calculate area of a random quadrilateral yet");
    }

}
