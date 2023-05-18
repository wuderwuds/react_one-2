import { MemoHeader } from "./Header/Header"
import { MemoFooter } from "./Footer/Footer"
import { Outlet } from "react-router-dom"
import styles from './layout.module.css'

export const Layout = () => {
    return(
    <div >
            <MemoHeader/>
            <main className={`  ${styles.wrapper}`} > 
            <Outlet/>
            </main>
            <MemoFooter/>
    </div>    
    )
}