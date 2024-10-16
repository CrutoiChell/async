import { Link, Outlet, useLoaderData, Form } from "react-router-dom";
import s from './root.module.css'
import { getProducts, createProduct } from "../../../forstorage";

export async function rootLoader() {
    const products = await getProducts();
    return { products };
}

export async function rootAction() {
    const product = await createProduct();
    return { product };
}

export function Root() {
    const { products } = useLoaderData();
    return (
        <div>
            <Form method="post">
                <button type="submit">add product</button>
            </Form>
            {products.length ? (
                <nav className={s.container}>
                    {products.map((product) => (
                        <Link key={product.id} to={`products/${product.id}`}>
                            {product.id ? product.id : <i>Unnamed</i>}
                        </Link>
                    ))}
                </nav>
            ) : (
                <p><i>no products here ...</i></p>
            )}
            <Outlet />
            {/* <nav className={s.container}>
                <Link to="student/ch">Ch</Link>
                <Link to="student/en">En</Link>
                <Link to="student/ru">Ru</Link>
            </nav>
            <Outlet /> */}
        </div>
    )
}