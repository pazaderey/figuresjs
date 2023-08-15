export abstract class Figure {
    protected _area: number = 0;
    protected _perimeter: number = 0;

    constructor() {}

    get area(): number {
        const rounded = this._area.toFixed(5);
        if (rounded.endsWith("00000")) {
            return Math.round(this._area);
        }
        return Number(rounded);
    }

    get perimeter(): number {
        return this._perimeter;
    }
};
