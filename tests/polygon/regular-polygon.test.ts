import { RegularPolygon, Square } from "../../src";
import { getRandomPositive } from "../test-utils";
import { sideConsts } from "../../src/consts";


describe("Regular Polygon tests", () => {
    let sideCount: number;
    let sideLength: number;
    
    beforeEach(() => {
        sideCount = Math.round(getRandomPositive());
        sideLength = getRandomPositive();
    });

    describe("Creation", () => {
        it("should create a Regular Polygon", () => {
            const rPolygon = new RegularPolygon(sideCount, sideLength);
            
            expect(rPolygon).toBeInstanceOf(RegularPolygon);
            expect(rPolygon).toHaveProperty("area");
            expect(rPolygon).toHaveProperty("perimeter");
            expect(rPolygon).toHaveProperty("sides");
            expect(rPolygon).toHaveProperty("sideLength");
        });

        it("should not allow to pass incorrect params", () => {
            const randomNegative = getRandomPositive() * (-1);
            expect(() => new RegularPolygon(Math.round(randomNegative), sideLength)).toThrowError();
            expect(() => new RegularPolygon(sideCount, randomNegative)).toThrowError();
        });
    });

    describe("sides", () => {
        it("should have sides getter", () => {
            const rPolygon = new RegularPolygon(sideCount, sideLength);

            expect(rPolygon.sides).toBeDefined();
            expect(rPolygon.sides).toEqual(new Array(sideCount).fill(sideLength));
        });

        it("should have sides setter", () => {
            const rPolygon = new RegularPolygon(sideCount, sideLength);
            const oldSides = rPolygon.sides;

            const newSides = new Array(sideCount).fill(getRandomPositive());

            rPolygon.sides = newSides;
            expect(rPolygon.sides).not.toEqual(oldSides);
            expect(rPolygon.sides).toEqual(newSides);

        });
    });
    
    describe("Perimeter", () => {
        it("should have perimeter getter", () => {
            const rPolygon = new RegularPolygon(sideCount, sideLength);
            
            expect(rPolygon.perimeter).toBeDefined();
            
            const perimeter = sideLength * sideCount;
            expect(rPolygon.perimeter).toBeCloseTo(perimeter);
        });

        it("should change perimeter value", () => {
            const rPolygon = new RegularPolygon(sideCount, sideLength);
            const oldPerimeter = rPolygon.perimeter;
            
            const newSides = new Array(sideCount).fill(getRandomPositive());

            const newPerimeter = newSides.reduce((acc, pos) => acc + pos, 0);
            rPolygon.sides = newSides;
            
            expect(rPolygon.perimeter).not.toBeCloseTo(oldPerimeter);
            expect(rPolygon.perimeter).toBeCloseTo(newPerimeter);
        });
    });

    describe("Area", () => {
        it("should have area getter", () => {
            const rPolygon = new RegularPolygon(sideCount, sideLength);

            expect(rPolygon.area).toBeDefined();

            const area = (1 / 4) * sideCount * (sideLength ** 2) * (1 / Math.tan(Math.PI / sideCount));
            expect(rPolygon.area).toBeCloseTo(area);
        });

        it("should change area value", () => {
            const rPolygon = new RegularPolygon(sideCount, sideLength);

            const oldArea = rPolygon.area;
            
            const newSides = new Array(sideCount).fill(getRandomPositive());
            rPolygon.sides = newSides;

            const newArea = (1 / 4) * sideCount * (newSides[0] ** 2) * (1 / Math.tan(Math.PI / sideCount));

            expect(rPolygon.area).not.toBeCloseTo(oldArea);
            expect(rPolygon.area).toBeCloseTo(newArea);
        });
    });
});

describe("Square tests", () => {
    let sideLength: number;

    beforeEach(() => {
        sideLength = getRandomPositive();
    });

    describe("Creation", () => {
        it("should create a Square", () => {
            const square = new Square(sideLength);
            
            expect(square).toBeInstanceOf(RegularPolygon);
            expect(square).toBeInstanceOf(Square);
            expect(square).toHaveProperty("area");
            expect(square).toHaveProperty("perimeter");
            expect(square).toHaveProperty("sides");
            expect(square).toHaveProperty("sideLength");
            expect(square).toHaveProperty("diagonal");
        });

        it("should not allow to pass incorrect params", () => {
            const randomNegative = getRandomPositive() * (-1);
            expect(() => new Square(randomNegative)).toThrowError();
        });
    });

    describe("sides", () => {
        it("should have sides getter", () => {
            const square = new Square(sideLength);

            expect(square.sides).toBeDefined();
            expect(square.sides).toEqual(new Array(sideConsts.QUADRILATERAL_SIDES).fill(sideLength));
        });

        it("should have sides setter", () => {
            const square = new Square(sideLength);
            const oldSides = square.sides;

            const newSides = new Array(sideConsts.QUADRILATERAL_SIDES).fill(getRandomPositive());

            square.sides = newSides;
            expect(square.sides).not.toEqual(oldSides);
            expect(square.sides).toEqual(newSides);

        });
    });

    describe("sideLength", () => {
        it("should have sideLength getter", () => {
            const square = new Square(sideLength);

            expect(square.sideLength).toBeDefined();
            expect(square.sideLength).toEqual(sideLength);
        });

        it("should have sideLength setter", () => {
            const square = new Square(sideLength);
            const oldLength = square.sideLength;

            const newSideLength = getRandomPositive();

            square.sideLength = newSideLength;
            expect(square.sideLength).not.toEqual(oldLength);
            expect(square.sideLength).toEqual(newSideLength);

        });
    });

    describe("Perimeter", () => {
        it("should have perimeter getter", () => {
            const square = new Square(sideLength);
            
            expect(square.perimeter).toBeDefined();
            
            const perimeter = sideLength * sideConsts.QUADRILATERAL_SIDES;
            expect(square.perimeter).toBeCloseTo(perimeter);
        });

        it("should change perimeter value", () => {
            const square = new Square(sideLength);
            const oldPerimeter = square.perimeter;
            
            const newSides = new Array(sideConsts.QUADRILATERAL_SIDES).fill(getRandomPositive());

            const newPerimeter = newSides.reduce((acc, pos) => acc + pos, 0);
            square.sides = newSides;
            
            expect(square.perimeter).not.toBeCloseTo(oldPerimeter);
            expect(square.perimeter).toBeCloseTo(newPerimeter);
        });
    });

    describe("Area", () => {
        it("should have area getter", () => {
            const square = new Square(sideLength);

            expect(square.area).toBeDefined();

            const area = sideLength ** 2;
            expect(square.area).toBeCloseTo(area);
        });

        it("should change area value", () => {
            const square = new Square(sideLength);

            const oldArea = square.area;
            
            const newSides = new Array(sideConsts.QUADRILATERAL_SIDES).fill(getRandomPositive());
            square.sides = newSides;

            const newArea = newSides[0] ** 2;

            expect(square.area).not.toBeCloseTo(oldArea);
            expect(square.area).toBeCloseTo(newArea);
        });
    });
});
