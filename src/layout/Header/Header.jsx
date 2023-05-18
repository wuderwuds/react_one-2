import { Form } from '../../components/Form/form'

import './header.css'
import React from 'react'
const Header = () => {
    return (
        <>
        <header className="wrapper">Header!!!!</header>
   <Form />
   

        </>
    )
}
export const MemoHeader = React.memo(Header)