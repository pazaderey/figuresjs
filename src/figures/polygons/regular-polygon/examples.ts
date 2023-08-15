import { RegularPolygon } from "./regular-polygon";
import { sideConsts } from "consts";


export class RegularTriangle extends RegularPolygon {
    constructor(sideLength: number) {
        super(sideLength, sideConsts.TRIANGLE_SIDES);
    }
}

export class Square extends RegularPolygon {
    constructor(sideLength: number) {
        super(sideLength, sideConsts.QUADRILATERAL_SIDES);
    }
}

export class RegularPentagon extends RegularPolygon {
    constructor(sideLength: number) {
        super(sideLength, sideConsts.PENTAGON_SIDES);
    }
}

export class RegularHexagon extends RegularPolygon {
    constructor(sideLength: number) {
        super(sideLength, sideConsts.HEXAGON_SIDES);
    }
}

export class RegularHeptagon extends RegularPolygon {
    constructor(sideLength: number) {
        super(sideLength, sideConsts.HEPTAGON_SIDES);
    }
}

export class RegularOctagon extends RegularPolygon {
    constructor(sideLength: number) {
        super(sideLength, sideConsts.OCTAGON_SIDES);
    }
}
