import ReactDOM from 'react-dom/client';
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css';
import React, { Suspense, lazy } from "react";
import Loader from './components/loader.tsx';

import Admin from './Admin.tsx';
import NotFound from './notFound.tsx';


const AdminContainer = lazy(() => 
  wait(1300).then(() => import('./views/admin/AdminContainer.tsx'))
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Admin />,
    children: [
      {
        path: "/",
        element: <Navigate to="/pos/admin" />,
      },
      {
        path: "/pos/admin",
        element: (
          <Suspense fallback={<Loader />}>
            <AdminContainer />
          </Suspense>
        ),
      },
    ],
  },
  
  {
    path: "*", 
    element: <NotFound />,
  },
]);


function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
