import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Applied from './Components/Appliedjobs/Applied';
import Blog from './Components/Blog/Blog';
import Error from './Components/Error/Error';
import JobsDetails from './Components/JobsDetails/JobsDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/applied",
        element: <Applied></Applied>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/jobs/:id",
        element: <JobsDetails></JobsDetails>,
        loader: () => fetch('../public/jobs.json')
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
