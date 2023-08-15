import { Polygon } from "../polygon/polygon";


export class Quadrilateral extends Polygon {
    constructor(sides: [number, number, number, number]) {
        super(4, sides);
    }
}
