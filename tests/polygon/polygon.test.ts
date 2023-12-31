import { Polygon } from "../../src";
import { getRandomPositive, getValidPositives } from "../test-utils";


describe("Polygon tests", () => {
    const TEST_MIN_SIDES = 3;
    const TEST_MAX_SIDES = 10;

    let sideCount: number;
    let randomPositives = new Array<number>();
    
    beforeEach(() => {
        sideCount = Math.round(Math.random() * (TEST_MAX_SIDES - TEST_MIN_SIDES) + TEST_MIN_SIDES);
        randomPositives = getValidPositives(sideCount);
    });

    afterEach(() => {
        randomPositives.length = 0;
    });

    describe("Creation", () => {
        it("should create a Polygon", () => {
            const polygon = new Polygon(sideCount, randomPositives);

            expect(polygon).toBeInstanceOf(Polygon);
            expect(polygon).toHaveProperty("area");
            expect(polygon).toHaveProperty("perimeter");
            expect(polygon).toHaveProperty("sides");
        });

        it("should not allow to pass incorrect params", () => {
            const randomNegative = getRandomPositive() * (-1);
            expect(() => new Polygon(randomNegative, randomPositives)).toThrowError();

            const randomNonInteger = getRandomPositive() * Math.SQRT2;
            expect(() => new Polygon(randomNonInteger, [])).toThrowError();

            randomPositives[0] = randomPositives[0] * (-1);
            expect(() => new Polygon(sideCount, randomPositives)).toThrowError();
            randomPositives[0] = randomPositives[0] * (-1);

            randomPositives[0] = randomPositives.reduce((sum, num) => sum + num, 0);
            expect(() => new Polygon(sideCount, randomPositives)).toThrowError();
        });
    });

    describe("sides", () => {
        it("should have sides getter", () => {
            const polygon = new Polygon(sideCount, randomPositives);

            expect(polygon.sides).toBeDefined();
            expect(polygon.sides).toEqual(randomPositives);
        });

        it("should have sides setter", () => {
            const polygon = new Polygon(sideCount, randomPositives);

            const newPositives = getValidPositives(sideCount);
            polygon.sides = newPositives;
            expect(polygon.sides).not.toEqual(randomPositives);
            expect(polygon.sides).toEqual(newPositives);

        });

        it("should not allow to set sides array of different length", () => {
            const polygon = new Polygon(sideCount, randomPositives);

            const differentLength = sideCount + 1;
            const newPositives = getValidPositives(differentLength);
            const setSides = () => polygon.sides = newPositives;
            expect(setSides).toThrow();
        });
    });

    describe("Area", () => {
        it("should have area getter which returns 0", () => {
            const polygon = new Polygon(sideCount, randomPositives);

            expect(polygon.area).toBe(0);
        });
    });

    describe("Perimeter", () => {
        it("should have perimeter getter", () => {
            const polygon = new Polygon(sideCount, randomPositives);

            expect(polygon.perimeter).toBeDefined();

            const sum = randomPositives.reduce((acc, pos) => acc + pos, 0);
            expect(polygon.perimeter).toBeCloseTo(sum);
        });

        it("should change perimeter value", () => {
            const polygon = new Polygon(sideCount, randomPositives);
            const oldSum = randomPositives.reduce((acc, pos) => acc + pos, 0);

            
            const newPositives = getValidPositives(sideCount);
            const newSum = newPositives.reduce((acc, pos) => acc + pos, 0);
            polygon.sides = newPositives;

            expect(polygon.perimeter).not.toBeCloseTo(oldSum);
            expect(polygon.perimeter).toBeCloseTo(newSum);
        });
    });
});