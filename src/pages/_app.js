import React from 'react'
import Layout from '@/components/Layout'
import "@/node_modules/bootstrap/dist/css/bootstrap.min.css"
import "@/css/style.css"
import "@/css/login.css"

const App = ({Component, pageProps}) =>{
    return(
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
export default App