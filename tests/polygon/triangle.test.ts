import { Triangle } from "../../src";
import { getValidPositives } from "../test-utils";
import { sideConsts } from "../../src/consts";


describe("Triangle tests", () => {
    let randomPositives: number[];
    
    beforeEach(() => {
        randomPositives = getValidPositives(sideConsts.TRIANGLE_SIDES);
    });

    describe("Creation", () => {
        it("should create a Triangle", () => {
            const triangle = new Triangle(randomPositives);

            expect(triangle).toBeInstanceOf(Triangle);
            expect(triangle).toHaveProperty("area");
            expect(triangle).toHaveProperty("perimeter");
            expect(triangle).toHaveProperty("sides");
        });

        it("should not allow to pass incorrect params", () => {
            randomPositives[0] = randomPositives[0] * (-1);
            expect(() => new Triangle(randomPositives)).toThrowError();
            randomPositives[0] = randomPositives[0] * (-1);
        });
    });

    describe("sides", () => {
        it("should have sides getter", () => {
            const triangle = new Triangle(randomPositives);

            expect(triangle.sides).toBeDefined();
            expect(triangle.sides).toEqual(randomPositives);
        });

        it("should have sides setter", () => {
            const triangle = new Triangle(randomPositives);

            const newPositives = getValidPositives(sideConsts.TRIANGLE_SIDES);

            triangle.sides = newPositives;
            expect(triangle.sides).not.toEqual(randomPositives);
            expect(triangle.sides).toEqual(newPositives);

        });
    });
    
    describe("Perimeter", () => {
        it("should have perimeter getter", () => {
            const triangle = new Triangle(randomPositives);
            
            expect(triangle.perimeter).toBeDefined();
            
            const sum = randomPositives.reduce((acc, pos) => acc + pos, 0);
            expect(triangle.perimeter).toBeCloseTo(sum);
        });

        it("should change perimeter value", () => {
            const triangle = new Triangle(randomPositives);
            const oldPerimeter = triangle.perimeter;
            
            const newPositives = getValidPositives(sideConsts.TRIANGLE_SIDES);

            const newPerimeter = newPositives.reduce((acc, pos) => acc + pos, 0);
            triangle.sides = newPositives;
            
            expect(triangle.perimeter).not.toBeCloseTo(oldPerimeter);
            expect(triangle.perimeter).toBeCloseTo(newPerimeter);
        });
    });

    describe("Area", () => {
        it("should have area getter", () => {
            const triangle = new Triangle(randomPositives);

            expect(triangle.area).toBeDefined();

            const halfPerimeter = triangle.perimeter / 2;
            const area = Math.sqrt(halfPerimeter * randomPositives.reduce((production, side) => production * (halfPerimeter - side), 1));
            expect(triangle.area).toBeCloseTo(area);
        });

        it("should change area value", () => {
            const triangle = new Triangle(randomPositives);

            const oldArea = triangle.area;
            
            const newPositives = getValidPositives(sideConsts.TRIANGLE_SIDES);
            triangle.sides = newPositives;

            const newHalfPerimeter = triangle.perimeter / 2;
            const newArea = Math.sqrt(newHalfPerimeter * newPositives.reduce((production, side) => production * (newHalfPerimeter - side), 1));

            expect(triangle.area).not.toBeCloseTo(oldArea);
            expect(triangle.area).toBeCloseTo(newArea);
        });

        it("should round area to the nearest integer if it is almost integer", () => {
            const triangle = new Triangle([2, 2, 2 * Math.SQRT2]);

            expect(triangle.area).toBe(2);
        });
    });

    describe("Is Right Triangle", () => {
        it("should tell if a triangle is right", () => {
            const rightTriangle = new Triangle([3, 4, 5]);
            const notRightTriangle = new Triangle([1, 1, 1]);

            expect(Triangle.isRightTriangle(rightTriangle)).toBeTruthy();
            expect(Triangle.isRightTriangle(notRightTriangle)).toBeFalsy();
        });
    });
});