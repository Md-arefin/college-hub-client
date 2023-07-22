import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import SignUp from './Pages/SignUp/SignUp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
    ]
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signUp',
    element: <SignUp/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
