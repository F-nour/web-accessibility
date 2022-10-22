import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Layout from "./Layout";
import ErrorPage from "./ErrorPage";
import Home from "./pages/home";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<Layout />}
            errorElement={<ErrorPage />}
        >
            <Route errorElement={<ErrorPage />}>
                <Route index element={<Home />} />
            </Route>
        </Route>
    )
);