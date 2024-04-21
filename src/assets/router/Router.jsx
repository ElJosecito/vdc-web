import React from 'react'

//Routes configuration
import { Route, Routes } from 'react-router-dom'

//header
import Header from '../components/layout/Header'

function Router() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" component={
                    <>
                        <h1>Home</h1>
                        <p>Welcome to the home page</p>
                    </>
                } />
                <Route path="/about" component={
                    <>
                        <h1>About</h1>
                        <p>Learn more about us</p>
                    </>
                } />
                <Route path="/contact" component={
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