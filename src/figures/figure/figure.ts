interface IFigure {
    area: number;
    perimeter: number;
}

export abstract class Figure implements IFigure {
    protected _area = 0;
    protected _perimeter: number;

    public get area(): number {
        const rounded = this._area.toFixed(5);
        if (rounded.endsWith("00000")) {
            return Math.round(this._area);
        }
        return Number(rounded);
    }

    public get perimeter(): number {
        return this._perimeter;
    }

    protected abstract calculateArea(): void;

    protected abstract calculatePerimeter(): void;

    protected checkForNegative(num: number, name: string): void {
        if (num < 0) {
            throw new RangeError(`${name} cannot be negative`);
        }
    }
}
