import { Polygon } from "../../src";


describe("Polygon tests", () => {
    const TEST_MIN_SIDES = 3;
    const TEST_MAX_SIDES = 10;

    let testSidesSize: number;

    let randomPositives = new Array<number>();
    const getRandomPositives = (size: number) => {
        const result = new Array<number>();
        for (let i = 0; i < size; i++) {
            result.push(Math.random() * 100);
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
            expect(polygon.area).toThrowError();
            expect(polygon).toHaveProperty("perimeter");
            expect(polygon).toHaveProperty("sides");
        });

        it("should not allow to pass incorrect params", () => {
            expect(new Polygon(-1, [])).toThrowError();
            expect(new Polygon(1.5, [])).toThrowError();
            expect(new Polygon(1, [-1])).toThrowError();

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

        it("should not allow to set sides of different length", () => {
            const polygon = new Polygon(testSidesSize, randomPositives);

            const differentLength = testSidesSize + 1;
            const newPositives = getRandomPositives(differentLength);
            const setSides = () => polygon.sides = newPositives;
            expect(setSides).toThrow();
        });
    });
});