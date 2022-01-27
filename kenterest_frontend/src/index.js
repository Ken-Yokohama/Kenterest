import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById('root')
);

//**New BoilerPLate for Router
//**Place this inside index.js and wrap <Router> around <App />
// import { BrowserRouter as Router } from 'react-router-dom';
// ReactDOM.render(
//     <Router>
//         <App />
//     </Router>, 
//     document.getElementById('root')
// );
// 
// **Place this inside App .js
// 
// import {Routes, Route, useNavigate} from 'react-router-dom';
// **Note: Switch was Renamed Routes in latest Update
// 
// function App(){
//     return (
//         <Routes>
//             <Route path="login" element={<Login />} />
//             <Route path="/*" element={<Home />} />
//**Note: Make a Functional Component for <Login /> & <Home />
//         </Routes>
//     )
// }
// 
// export default App;




//OLD Boilerplate

// import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
// import About from './Pages/About';
// import Home from './Pages/Home';

// <Router>
//     <nav>
//         <ul>
//             <li>
//                 <Link to='/'>Home</Link>
//             </li>
//             <li>
//                 <Link to='/About'>About</Link>
//             </li>
//         </ul>
//     </nav>

//     <Switch>
//         <Route path='/' exact component={Home} />
//         <Route path='/About' component={About} />
//     </Switch>

// </Router>