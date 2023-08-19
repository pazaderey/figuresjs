import { Figure } from "../figure";
import { ICircle } from "../../types";


/**
 * Class that implements circle. 
 * Wiki definition - {@link https://en.wikipedia.org/wiki/Circle}
 */
export class Circle extends Figure implements ICircle {
    private _radius: number;

    /**
     * Creates a circle
     * @param radius Circle's radius
     */
    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    /**
     * @returns Circle radius
     */
    public get radius(): number {
        return this._radius;
    }
    
    /**
     * Set new radius for a circle
     * @throws RangeError if new radius is negative
     */
    public set radius(newRadius: number) {
        this.checkForNegative(newRadius, "Radius");
        this._radius = newRadius;
        this.calculateArea();
        this.calculatePerimeter();
    }

    /**
     * @returns Circle diameter
     */
    public get diameter(): number {
        return this._radius * 2;
    }

    /** 
     * Calculates circle area as
     * ```text
     * A = π * R ^ 2
     * ```
     */
    protected calculateArea(): void {
        this._area = Math.PI * (this._radius ** 2);
    }

    /** 
     * Calculates circle perimeter as
     * ```text
     * P = 2 * π * R
     * ```
     */
    protected calculatePerimeter(): void {
        this._perimeter = 2 * Math.PI * this._radius;
    }
}
