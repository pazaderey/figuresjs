import { Polygon } from "../polygon";
import { sideConsts } from "../../../consts";


export class Quadrilateral extends Polygon {
    constructor(sides: number[]) {
        super(sideConsts.QUADRILATERAL_SIDES, sides);
    }
}
