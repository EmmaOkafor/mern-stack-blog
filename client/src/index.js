import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Write from './components/blog/Write';
// import About from './components/blog/About';
// import Contact from './components/blog/Contact';
// import Login from './components/blog/Login';
// import Register from './components/blog/Register';
// import Logout from './components/blog/Logout';
// import App from './components/App';

// import {
// createBrowserRouter,
// RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter([
// {
//   path: "/",
//   element: <App />,
// },
// {
//   path: "/about",
//   element: <About />,
// },
// {
//   path: "/contact",
//   element: <Contact />,
// },
// {
//   path: "/write",
//   element: <Write />,
// },
// {
//   path: "/logout",
//   element: <Logout />,
// },
// {
//   path: "/login",
//   element: <Login />,
// },
// {
//   path: "/register",
//   element: <Register />,
// }
  
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
