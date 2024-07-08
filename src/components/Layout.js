import { Outlet } from "react-router";
import { AppBar } from "./AppBar/AppBar";
import { Suspense } from 'react';

export const Layout = () => {
    return (
        <div>
            <AppBar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </div>
    )
}