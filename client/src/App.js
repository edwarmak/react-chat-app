import React from 'react'

import Join from './components/Join'
import Chat from './components/Chat'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <Routes><Route path="/" exact element={<Join />} /></Routes>
            <Routes><Route path="/chat" element={<Chat />} /></Routes>
        </Router>
    )
}

export default App