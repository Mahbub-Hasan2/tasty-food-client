import React from 'react'
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import './assets/styles/index.css';
import HomePage from './pages/HomePage';
import Layouts from './Layouts/Layouts';
import SignInPage from './pages/Auth/SignInPage';
import LogInPage from './pages/Auth/LogInPage';
import AuthPage from './pages/Auth/AuthPage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChefDetail from './pages/ChefDetail';
import AuthContextProvider from './Layouts/AuthContextProvider';
import Blogs from './pages/Blogs';
import PrivateRout from './routes/PrivateRoute';
import PrivateRoute from './routes/PrivateRoute';
import Contact from './pages/Contact';
import AboutPage from './pages/AboutPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/chef/:id",
        element: <PrivateRoute><ChefDetail /></PrivateRoute>,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/auth",
        element: <AuthPage />,
        children: [
          {
            path: "signin",
            element: <SignInPage />,
          },
          {
            path: "login",
            element: <LogInPage />,
          }
        ]
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>,
)
