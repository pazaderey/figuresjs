import { Polygon } from "../polygon";
import { sideConsts } from "../../../consts";
import { IPolygon } from "../../../types";

/**
 * Quadrilateral class. Quadrilateral is a polygon with 4 sides.
 * Wiki definition - {@link https://en.wikipedia.org/wiki/Quadrilateral}
 */
export class Quadrilateral extends Polygon implements IPolygon {
    /**
     * Creates a quadrilateral
     * @param sides Sides of a quadrilateral
     */
    constructor(sides: number[]) {
        super(sideConsts.QUADRILATERAL_SIDES, sides);
    }
}
