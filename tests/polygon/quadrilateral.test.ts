import { Quadrilateral  } from "../../src";
import { getValidPositives } from "../test-utils";
import { sideConsts } from "../../src/consts";


describe("Quadrilateral tests", () => {
    let randomPositives: number[];
    
    beforeEach(() => {
        randomPositives = getValidPositives(sideConsts.QUADRILATERAL_SIDES);
    });

    describe("Creation", () => {
        it("should create a Quadrilateral", () => {
            const quadrilateral = new Quadrilateral(randomPositives);

            expect(quadrilateral).toBeInstanceOf(Quadrilateral);
            expect(quadrilateral).toHaveProperty("area");
            expect(quadrilateral).toHaveProperty("perimeter");
            expect(quadrilateral).toHaveProperty("sides");
        });

        it("should not allow to pass incorrect params", () => {
            randomPositives[0] = randomPositives[0] * (-1);
            expect(() => new Quadrilateral(randomPositives)).toThrowError();
            randomPositives[0] = randomPositives[0] * (-1);

            randomPositives[0] = randomPositives[0] + randomPositives[1] + randomPositives[2] + randomPositives[3];
            expect(() => new Quadrilateral(randomPositives)).toThrowError();
        });
    });

    describe("sides", () => {
        it("should have sides getter", () => {
            const quadrilateral = new Quadrilateral(randomPositives);

            expect(quadrilateral.sides).toBeDefined();
            expect(quadrilateral.sides).toEqual(randomPositives);
        });

        it("should have sides setter", () => {
            const quadrilateral = new Quadrilateral(randomPositives);

            const newPositives = getValidPositives(sideConsts.QUADRILATERAL_SIDES);
            quadrilateral.sides = newPositives;
            expect(quadrilateral.sides).not.toEqual(randomPositives);
            expect(quadrilateral.sides).toEqual(newPositives);

        });
    });
    
    describe("Perimeter", () => {
        it("should have perimeter getter", () => {
            const quadrilateral = new Quadrilateral(randomPositives);

            expect(quadrilateral.perimeter).toBeDefined();

            const sum = randomPositives.reduce((acc, pos) => acc + pos, 0);
            expect(quadrilateral.perimeter).toBeCloseTo(sum);
        });

        it("should change perimeter value", () => {
            const quadrilateral = new Quadrilateral(randomPositives);
            const oldSum = randomPositives.reduce((acc, pos) => acc + pos, 0);

            
            const newPositives = getValidPositives(sideConsts.QUADRILATERAL_SIDES);
            const newSum = newPositives.reduce((acc, pos) => acc + pos, 0);
            quadrilateral.sides = newPositives;

            expect(quadrilateral.perimeter).not.toBeCloseTo(oldSum);
            expect(quadrilateral.perimeter).toBeCloseTo(newSum);
        });
    });

    describe("Area", () => {
        it("should have area getter which returns 0", () => {
            const quadrilateral = new Quadrilateral(randomPositives);

            expect(quadrilateral.area).toBe(0);
        });
    });
});

describe("Rectangle tests", () => {

});