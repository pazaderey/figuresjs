import { RegularPolygon } from "./regular-polygon";
import { sideConsts } from "../../../consts";


/**
 * Regular triangle class
 */
export class RegularTriangle extends RegularPolygon {
    constructor(sideLength: number) {
        super(sideLength, sideConsts.TRIANGLE_SIDES);
    }

    public get height(): number {
        return this._sideLength * Math.sqrt(3) / 2;
    }
}

/**
 * Square class
 */
export class Square extends RegularPolygon {
    constructor(sideLength: number) {
        super(sideLength, sideConsts.QUADRILATERAL_SIDES);
    }

    public get diagonal(): number {
        return this._sideLength * Math.SQRT2;
    }
}

/**
 * Regular pentagon class
 */
export class RegularPentagon extends RegularPolygon {
    constructor(sideLength: number) {
        super(sideLength, sideConsts.PENTAGON_SIDES);
    }
}

/**
 * Regular Hexagon class
 */
export class RegularHexagon extends RegularPolygon {
    constructor(sideLength: number) {
        super(sideLength, sideConsts.HEXAGON_SIDES);
    }
}
