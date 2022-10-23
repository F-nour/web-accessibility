import React from "react"
import { Outlet } from "react-router-dom"
import NavMenu from "../components/Nav/NavMenu"

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