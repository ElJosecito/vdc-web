import React, { useEffect } from 'react'

//Routes configuration
import { Route, Routes } from 'react-router-dom'

//layaout components
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

//hero
import Hero from '../components/pages/Hero'

// import logo
// import logo from '../images/logo_vitaldental.png'

function Router() {

    // useEffect(() => {
    //     // document.querySelector('link[rel="icon"]').href = logo
    // }, [])

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Hero />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Router