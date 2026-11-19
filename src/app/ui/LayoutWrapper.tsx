import { Outlet } from "react-router-dom"

import { QueryProvider } from "../provider/QueryProvider"

export const LayoutWrapper = () => {
    return (
        <>
            <QueryProvider>
                <Outlet/>
            </QueryProvider>
        </>
    )
}