import { MemoHeader } from "./Header/Header"
import { MemoFooter } from "./Footer/Footer"
import { Outlet } from "react-router-dom"

export const Layout = () => {
    return(
        <div className="App">
            <MemoHeader/>
            <Outlet/>
            <MemoFooter/>
        </div>
    )
}