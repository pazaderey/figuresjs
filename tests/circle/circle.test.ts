import { Circle } from "../../src";
import { getRandomPositive } from "../test-utils";


describe("Circle tests", () => {
    let randomPositive: number;

    beforeEach(() => {
        randomPositive = getRandomPositive();
    });

    describe("Creation", () => {
        it("should create a circle", () => {
            const circle = new Circle(randomPositive);
            expect(circle).toBeInstanceOf(Circle);
            expect(circle).toHaveProperty("radius");
            expect(circle).toHaveProperty("diameter");
            expect(circle).toHaveProperty("area");
            expect(circle).toHaveProperty("perimeter");
        });

        it("should not allow to pass incorrect params", () => {
            const randomNegative = getRandomPositive() * (-1);
            expect(() => new Circle(randomNegative)).toThrowError();
        });
    });

    describe("Radius", () => {
        it("should have radius getter", () => {
            const circle = new Circle(randomPositive);

            expect(circle.radius).toBeDefined();
            expect(circle.radius).toEqual(randomPositive);
        });

        it("should have radius setter", () => {
            const circle = new Circle(randomPositive);

            const newPositive = getRandomPositive();
            circle.radius = newPositive;
            expect(circle.radius).not.toEqual(randomPositive);
            expect(circle.radius).toEqual(newPositive);
        });

        it("should not allow to set negative radius", () => {
            const circle = new Circle(randomPositive);
            
            const randomNegative = getRandomPositive() * (-1);
            expect(() => circle.radius = randomNegative).toThrowError();
        });
    });

    describe("Diameter", () => {
        it("should have diameter getter", () => {
            const circle = new Circle(randomPositive);

            expect(circle.diameter).toBeDefined();
            expect(circle.diameter).toBeCloseTo(2 * randomPositive);
        });

        it("should change diameter value", () => {
            const circle = new Circle(randomPositive);
            
            const newPositive = getRandomPositive();
            circle.radius = newPositive;
            expect(circle.diameter).not.toBeCloseTo(2 * randomPositive);
            expect(circle.diameter).toBeCloseTo(2 * newPositive);
        });
    });

    describe("Area", () => {
        it("should have area getter", () => {
            const circle = new Circle(randomPositive);

            expect(circle.area).toBeDefined();
            expect(circle.area).toBeCloseTo(Math.PI * (randomPositive ** 2));
        });

        it("should change area value", () => {
            const circle = new Circle(randomPositive);
            
            const newPositive = getRandomPositive();
            circle.radius = newPositive;
            expect(circle.area).not.toBeCloseTo(Math.PI * (randomPositive ** 2));
            expect(circle.area).toBeCloseTo(Math.PI * (newPositive ** 2));
        });

        it("should round area to the nearest integer if it is almost integer", () => {
            const circle = new Circle(1 / Math.sqrt(Math.PI));

            expect(circle.area).toBe(1);
        });
    });

    describe("Perimeter", () => {
        it("should have perimeter getter", () => {
            const circle = new Circle(randomPositive);

            expect(circle.perimeter).toBeDefined();
            expect(circle.perimeter).toBeCloseTo(2 * Math.PI * randomPositive);
        });

        it("should change perimeter value", () => {
            const circle = new Circle(randomPositive);
            
            const newPositive = getRandomPositive();
            circle.radius = newPositive;
            expect(circle.perimeter).not.toBeCloseTo(2 * Math.PI * randomPositive);
            expect(circle.perimeter).toBeCloseTo(2 * Math.PI * newPositive);
        });
    });
});