import React from 'react'
import Header from "@/components/Header"

const Layout = ({ children }) =>{
    return(
        <React.Fragment>
            <Header/>
            <div>{children}</div>
        </React.Fragment>
    )
}

export default Layout