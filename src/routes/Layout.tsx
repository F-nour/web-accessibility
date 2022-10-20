import { Outlet } from "react-router-dom"
import NavMenu from "../components/Nav"

export default function Layout() {
    return (
        <>
            <NavMenu />
            <main>
                <Outlet />
            </main>
        </>
    )
}