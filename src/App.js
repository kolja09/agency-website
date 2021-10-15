import React from 'react';
import {GlobalStyle} from "./globalStyles";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Pages/Home";


const App = () => {
    return (
        <>
            <GlobalStyle/>
            <Router>
                <Route path='/' exact component={Home}/>
            </Router>
        </>
    );
};

export default App;
