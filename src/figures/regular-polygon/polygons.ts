import { RegularPolygon } from "./regular-polygon";


export class RegularTriangle extends RegularPolygon {
    constructor(side: number) {
        super(side, 3);
    }
}

export class Square extends RegularPolygon {
    constructor(side: number) {
        super(side, 4);
    }
}

export class RegularPentagon extends RegularPolygon {
    constructor(side: number) {
        super(side, 5);
    }
}

export class RegularHexagon extends RegularPolygon {
    constructor(side: number) {
        super(side, 6);
    }
}

export class RegularOctagon extends RegularPolygon {
    constructor(side: number) {
        super(side, 8);
    }
}
