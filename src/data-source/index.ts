import faker from 'faker';

faker.seed(123);

const generateData = () => {
    return [
        ...Array.from({length: 10}).map(() => ({
            name: faker.name.findName(),
            email: faker.internet.email(),
            createdAt: faker.date.past(),
            updatedAt: faker.date.recent(),
        })),
        ...Array.from({length: 10}).map(() => ({
            name: faker.name.findName(),
            email: faker.internet.email(),
            createdAt: faker.date.past(),
            updatedAt: faker.date.past(),
        })),
    ]
}

export interface IProduct {
    color: string;
    department: string;
    productName: string;
    price: string;
    productAdjective: string;
    productMaterial: string;
    product: string;
    productDescription: string;
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const getProductData: () => Promise<IProduct[]> = async () => {
    await sleep(500);
    return [
        ...Array.from({length: 25}).map(() => ({
            color: faker.commerce.color(),
            department: faker.commerce.department(),
            productName: faker.commerce.productName(),
            price: faker.commerce.price(),
            productAdjective: faker.commerce.productAdjective(),
            productMaterial: faker.commerce.productMaterial(),
            product: faker.commerce.product(),
            productDescription: faker.commerce.productDescription(),
        }))

    ]

}

export default generateData;