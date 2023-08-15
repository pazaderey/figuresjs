import { RegularPolygon } from "./regular-polygon";


export class RegularTriangle extends RegularPolygon {
    constructor(sideLength: number) {
        super(sideLength, 3);
    }
}

export class Square extends RegularPolygon {
    constructor(sideLength: number) {
        super(sideLength, 4);
    }
}

export class RegularPentagon extends RegularPolygon {
    constructor(sideLength: number) {
        super(sideLength, 5);
    }
}

export class RegularHexagon extends RegularPolygon {
    constructor(sideLength: number) {
        super(sideLength, 6);
    }
}

export class RegularHeptagon extends RegularPolygon {
    constructor(sideLength: number) {
        super(sideLength, 7);
    }
}

export class RegularOctagon extends RegularPolygon {
    constructor(sideLength: number) {
        super(sideLength, 8);
    }
}
