import { Quadrilateral } from "../../src";


describe("Quadrilateral tests", () => {
    let randomPositives: [number, number, number, number];

    const getRandomPositive = () => Math.random() * 100;
    
    beforeEach(() => {
        randomPositives = [
            getRandomPositive(),
            getRandomPositive(),
            getRandomPositive(),
            getRandomPositive()
        ];
        while (!Quadrilateral.canExist(randomPositives)) {
            randomPositives = [
                getRandomPositive(),
                getRandomPositive(),
                getRandomPositive(),
                getRandomPositive()
            ];
        }
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

            randomPositives[0] = randomPositives[0] + randomPositives[1] + randomPositives[2];
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

            const newPositives = [getRandomPositive(), getRandomPositive(), getRandomPositive(), getRandomPositive()];
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

            
            const newPositives = [getRandomPositive(), getRandomPositive(), getRandomPositive(), getRandomPositive()];
            const newSum = newPositives.reduce((acc, pos) => acc + pos, 0);
            quadrilateral.sides = newPositives;

            expect(quadrilateral.perimeter).not.toBeCloseTo(oldSum);
            expect(quadrilateral.perimeter).toBeCloseTo(newSum);
        });
    });

    describe("Area", () => {
    });
});