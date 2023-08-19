import { RegularPolygon } from "../../src";
import { getRandomPositive } from "../test-utils";


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
