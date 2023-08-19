/**
 * Base interface for a figure as a closed area on a surface.
 */
export interface IFigure {
    readonly area: number;
    readonly perimeter: number;
}

/**
 * Circle interface
 */
export interface ICircle extends IFigure {
    radius: number;
    readonly diameter: number;
}

/**
 * Polygon interface. Polygon is a figure with straight sides of different length.
 */
export interface IPolygon extends IFigure {
    sides: number[];
}

/**
 * Regular polygon interface. Regular polygon is a polygon that is equilateral and equiangular.
 */
export interface IRegularPolygon extends IPolygon {
    sideLength: number;
}
