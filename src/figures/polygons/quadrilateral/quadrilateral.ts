import { Polygon } from "../polygon";
import { sideConsts } from "../../../consts";


export class Quadrilateral extends Polygon {
    constructor(sides: [number, number, number, number]) {
        super(sideConsts.QUADRILATERAL_SIDES, sides);
    }

    get area(): never {
        throw new Error("Cannot compute area of a random quadrilateral yet");
    }
}
