import ReactDOM from 'react-dom/client';
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css';
import React, { Suspense, lazy } from "react";
import Loader from './components/loader.tsx';
import AdminProtectedRoute from "./protector/AdminProtectedRoute.tsx";
import NotFound from './notFound.tsx';

const DashboardContainer = lazy(() => 
  wait(1300).then(() => import('./views/admin/dashboard/DashboardContainer.tsx'))
);

const CashierContainer = lazy(() => 
  wait(1300).then(() => import('./views/admin/cashier/CashierContainer.tsx'))
);

const ProductContainer = lazy(() => 
  wait(1300).then(() => import('./views/admin/product/ProductContainer.tsx'))
);

const Login = lazy(() =>
  wait(1300).then(() => import("../src/views/auth/Login.tsx"))
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <>
      <Suspense fallback={<Loader />}>
        <Login />
      </Suspense>
    </>,
  },
  {
    path: "/admin",
    element: <AdminProtectedRoute />,
    children: [
      {
        path: "/admin",
        element: <Navigate to="/admin/pos" />,
      },
      {
        path: "/admin/pos",
        element: (
          <Suspense fallback={<Loader />}>
            <DashboardContainer />
          </Suspense>
        ),
      },
      {
        path: "/admin/cashier",
        element: (
          <Suspense fallback={<Loader />}>
            <CashierContainer />
          </Suspense>
        ),
      },
      {
        path: "/admin/products",
        element: (
          <Suspense fallback={<Loader />}>
            <ProductContainer />
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
