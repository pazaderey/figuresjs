import { Polygon } from "../src";


export const getRandomPositive = () => Math.random() * 100;

export const getRandomPositives = (size: number) => {
    const result = new Array<number>(size);
    for (let i = 0; i < size; i++) {
        result[i] = getRandomPositive();
    }
    return result;
};

export const getValidPositives = (size: number) => {
    let randomPositives = getRandomPositives(size);
    while (!Polygon.canExist(randomPositives)) {
        randomPositives = getRandomPositives(size);
    }
    return randomPositives;
};