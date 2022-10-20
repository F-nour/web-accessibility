import { Outlet } from "react-router-dom"
import NavMenu from "../components/Nav"


export default function App() {
    return (
        <>
            <NavMenu />
            <main>
                <Outlet />
            </main>
        </>
    )
}