import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import SignUp from './Pages/SignUp/SignUp.jsx';
import CollegePage from './Pages/CollegePage/CollegePage.jsx';
import AdmissionPage from './Pages/AdmissionPage/AdmissionPage.jsx';
import MyCollege from './Pages/MyCollege/MyCollege.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import CollegeDetail from './Components/collegeDetail/collegeDetail.jsx';
import ResearchDetails from './Pages/ResearchDetails/ResearchDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/colleges",
        element: <CollegePage />
      },
      {
        path: "/colleges/:collegeDetails",
        element: <CollegeDetail/>,
        loader: ({params}) => fetch(`http://localhost:5000/colleges/${params.collegeDetails}`) 
      },
      {
        path: "/get-research/:id",
        element: <ResearchDetails />,
        loader: ({params}) => fetch(`http://localhost:5000/get-research/${params.id}`) 
      },
      {
        path: "/admission",
        element: <AdmissionPage />
      },
      {
        path: "/my-college",
        element: <MyCollege />
      },
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signUp',
    element: <SignUp />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='px-4 md:5 lg:px-8'>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>,
)
