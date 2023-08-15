import { Figure } from "../figure"


export class Rectangle extends Figure {
    constructor(
        private _width: number,
        private _height: number,
    ) {
        super();
        this.calculateArea();
        this.calculatePerimeter();
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    set width(newWidth: number) {
        if (newWidth < 0) {
            throw new RangeError("Width cannot be negative");
        }
        this._width = newWidth;
        this.calculateArea();
        this.calculatePerimeter();
    }

    set height(newHeight: number) {
        if (newHeight < 0) {
            throw new RangeError("Height cannot be negative");
        }
        this._width = newHeight;
        this.calculateArea();
        this.calculatePerimeter();
    }

    private calculateArea(): void {
        this._area = this._width * this._height;
    }

    private calculatePerimeter(): void {
        this._perimeter = 2 * this._width + 2 * this._height;
    }
}
