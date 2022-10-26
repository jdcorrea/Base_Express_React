import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/"/>
            </Routes>
        </Router>
    );
};

export default AppRouter;
