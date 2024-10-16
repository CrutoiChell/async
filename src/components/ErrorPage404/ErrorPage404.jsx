import { useRouteError } from 'react-router-dom';

export function ErrorPage404() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <h1>{error.statusText}</h1>
            <h1>{error.data}</h1>
        </>
    )
}
