import React from 'react'

//Routes configuration
import { Route, Routes } from 'react-router-dom'

//header
import Header from '../components/layout/Header'

//componets
import Hero from '../components/pages/Hero'

function Router() {
    return (
        <>
            {/* <Header /> */}
            <Header />
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/about" element={
                    <>
                        <h1>About</h1>
                        <p>Learn more about us</p>
                    </>
                } />
                <Route path="/contact" element={
                    <>
                        <h1>Contact</h1>
                        <p>Get in touch with us</p>
                    </>
                } />
            </Routes>
        </>
    )
}

export default Router