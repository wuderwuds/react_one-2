

import { Link, NavLink, useLocation } from 'react-router-dom'
import styles from './header.module.css'
import React from 'react'
const Header = () => {
    const {pathname} = useLocation() //примнение снизу
    return (
        <>
        <header className={styles.wrapper}>
            <nav>
            <ul className={styles.headerMenu}>   
            
            <li> <Link to='/'>Домой</Link> </li>
            
            
            <li> <NavLink
             className={({ isActive }) => isActive ? styles.active : styles.active1}
             to='contacts'>Контакты</NavLink> </li>
            <li> <NavLink
             className={({ isActive }) => isActive ? styles.active : styles.active1}
             to='tudos'>Тудушки</NavLink> </li>
            {pathname === '/tudos' && <li> <Link to='/'>юхууу</Link> </li> }
            </ul>
            </nav>
        </header>
   
   

        </>
    )
}
export const MemoHeader = React.memo(Header)