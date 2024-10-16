import localforage from 'localforage';
import { nanoid } from 'nanoid';


export async function createProduct() {
	await someNetwork();
	let id = nanoid(6);
	let product = { id };
	let products = await getProducts();
	products.unshift(product);
	await setProducts(products);
	return product;
}

function setProducts(products) {
	return localforage.setItem('products', products);
}

export async function getProducts() {
    await someNetwork();
    let products = await localforage.getItem('products');
    if (!products) products = [];
    return products;
}

let someCache = {};

async function someNetwork(key) {
    if (!key) {
        someCache = {};
    }

    if (someCache[key]) {
        return;
    }

    someCache[key] = true;

    return new Promise((res) => {
        setTimeout(res, Math.random() * 700);
    })
}