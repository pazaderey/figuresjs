import { Polygon } from "../../src";


describe("Polygon tests", () => {
    const TEST_MIN_SIDES = 3;
    const TEST_MAX_SIDES = 10;

    let testSidesSize: number;
    let randomPositives = new Array<number>();

    const getRandomPositive = () => Math.random() * 100;
    const getRandomPositives = (size: number) => {
        const result = new Array<number>(size);
        for (let i = 0; i < size; i++) {
            result[i] = getRandomPositive();
        }
        return result;
    };
    
    beforeEach(() => {
        testSidesSize = Math.round(Math.random() * (TEST_MAX_SIDES - TEST_MIN_SIDES) + TEST_MIN_SIDES);
        randomPositives = getRandomPositives(testSidesSize);
    });

    afterEach(() => {
        randomPositives.length = 0;
    });

    describe("Creation", () => {
        it("should create a Polygon", () => {
            const polygon = new Polygon(testSidesSize, randomPositives);

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
            expect(() => new Polygon(testSidesSize, randomPositives)).toThrowError();

        });
    });

    describe("sides", () => {
        it("should have sides getter", () => {
            const polygon = new Polygon(testSidesSize, randomPositives);

            expect(polygon.sides).toBeDefined();
            expect(polygon.sides).toEqual(randomPositives);
        });

        it("should have sides setter", () => {
            const polygon = new Polygon(testSidesSize, randomPositives);

            const newPositives = getRandomPositives(testSidesSize);
            polygon.sides = newPositives;
            expect(polygon.sides).not.toEqual(randomPositives);
            expect(polygon.sides).toEqual(newPositives);

        });

        it("should not allow to set sides array of different length", () => {
            const polygon = new Polygon(testSidesSize, randomPositives);

            const differentLength = testSidesSize + 1;
            const newPositives = getRandomPositives(differentLength);
            const setSides = () => polygon.sides = newPositives;
            expect(setSides).toThrow();
        });
    });

    describe("Area", () => {
        it("should have area getter which returns 0", () => {
            const polygon = new Polygon(testSidesSize, randomPositives);

            expect(polygon.area).toBe(0);
        });
    });

    describe("Perimeter", () => {
        it("should have perimeter getter", () => {
            const polygon = new Polygon(testSidesSize, randomPositives);

            expect(polygon.perimeter).toBeDefined();

            const sum = randomPositives.reduce((acc, pos) => acc + pos, 0);
            expect(polygon.perimeter).toBeCloseTo(sum);
        });

        it("should change perimeter value", () => {
            const polygon = new Polygon(testSidesSize, randomPositives);
            const oldSum = randomPositives.reduce((acc, pos) => acc + pos, 0);

            
            const newPositives = getRandomPositives(testSidesSize);
            const newSum = newPositives.reduce((acc, pos) => acc + pos, 0);
            polygon.sides = newPositives;

            expect(polygon.perimeter).not.toBeCloseTo(oldSum);
            expect(polygon.perimeter).toBeCloseTo(newSum);
        });
    });
});