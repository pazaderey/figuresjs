import { IFigure } from "../../types";


/**
 * Abstract class for exact figure implementations
 */
export abstract class Figure implements IFigure {
    protected _area = 0;
    protected _perimeter: number;

    /**
     * Returns figure area. If the area.toFixed(5) ends with '00000' (1.00000), return Integer value. Else return full value.
     * @returns area property
     */
    public get area(): number {
        const rounded = this._area.toFixed(5);
        if (rounded.endsWith("00000")) {
            return Math.round(this._area);
        }
        return Number(rounded);
    }

    /**
     * Returns figure perimeter
     * @returns perimeter property
     */
    public get perimeter(): number {
        return this._perimeter;
    }

    /**
     * Abstract method for figure's area calculation, that should be implemented in child classes.
     * Should follow next rules (examples for the circle implementation):
     * 
     * @example
     * Should set Figure._area property:
     * ```ts
     * protected calculateArea(): void {
     *  this._area = Math.PI * (this._radius ** 2);
     * }
     * ```
     * 
     * @example
     * Should be called in the constructor or in property setters:
     * ```ts
     * public set radius(newRadius: number) {
     *  this.checkForNegative(newRadius, "Radius");
     *  this._radius = newRadius;
     *  this.calculateArea();
     *  this.calculatePerimeter();
     * }
     * ```
     */
    protected abstract calculateArea(): void;

    /**
     * Abstract method for figure's perimeter calculation, that should be implemented in child classes.
     * Should follow next rules (examples for the circle implementation):
     * 
     * @example
     * Should set Figure._perimeter property:
     * ```ts
     * protected calculatePerimeter(): void {
     *  this._perimeter = 2 * Math.PI * this._radius;
     * }
     * ```
     * 
     * @example
     * Should be called in the constructor or in property setters:
     * ```ts
     * public set radius(newRadius: number) {
     *  this.checkForNegative(newRadius, "Radius");
     *  this._radius = newRadius;
     *  this.calculateArea();
     *  this.calculatePerimeter();
     * }
     * ```
     */
    protected abstract calculatePerimeter(): void;

    /**
     * Checks if num is negative. Throws RangeError if so with message `${name} cannot be negative`
     * @param num Number to check
     * @param name Title for the num
     * @throws RangeError if num is negative
     * 
     * @example
     * For positive num:
     * ```ts
     * // returns nothing
     * Figure.checkForNegative(2, "My number");
     * ```
     * 
     * @example
     * For negative num:
     * ```ts
     * // throws RangeError("My number cannot be negative")
     * Figure.checkForNegative(-2, "My number");
     * ```
     * 
     */
    protected checkForNegative(num: number, name: string): void {
        if (num < 0) {
            throw new RangeError(`${name} cannot be negative`);
        }
    }
}
