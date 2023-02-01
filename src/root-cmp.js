import React from 'react'
import { Route, Routes } from 'react-router'
import { AppHeader } from './cmps/app-header'

import { HomePage } from './pages/home-page'

function RootCmp() {
    return (
        <div className='App'>
            <AppHeader />
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
            </Routes>
        </div>
    )
}

export default RootCmp
