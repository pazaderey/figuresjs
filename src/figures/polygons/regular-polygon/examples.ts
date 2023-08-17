import { RegularPolygon } from "./regular-polygon";
import { sideConsts } from "../../../consts";


export class RegularTriangle extends RegularPolygon {
    constructor(sideLength: number) {
        super(sideLength, sideConsts.TRIANGLE_SIDES);
    }

    public get height(): number {
        return this._sideLength * Math.sqrt(3) / 2;
    }
}

export class Square extends RegularPolygon {
    constructor(sideLength: number) {
        super(sideLength, sideConsts.QUADRILATERAL_SIDES);
    }

    public get diagonal(): number {
        return this._sideLength * Math.SQRT2;
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
