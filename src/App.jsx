import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import ChangePassword from "./pages/ChangePassword";
import CreateEvent from "./pages/admin/CreateEvent";
import CreateStaff from "./pages/admin/CreateStaff";
import DetailsEvent from "./pages/DetailsEvent";
import Profile from "./pages/Profile";
import Login from "./pages/login";
import Signup from "./pages/signup";
import EditEvent from "./pages/admin/EditEvent";
import ListEvent from "./pages/admin/ListEvent";
import ListStaff from "./pages/admin/ListStaff";
import { routes } from "./constants/routes";
import { AuthProvider, useAuth } from "./AuthContext";

const ProtectedRoute = () => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to={routes.login} />;
  }

  return <Outlet />;
};

const AppRoutes = () => {
  const { token } = useAuth();

  const routesForPublic = [
    {
      path: routes.home,
      element: <Home />
    },
    {
      path: routes.detailsEvent,
      element: <DetailsEvent />
    },
    {
      path: routes.createEvent,
      element: <CreateEvent />
    },
    {
      path: routes.createStaff,
      element: <CreateStaff />
    },
    {
      path: routes.editEvent,
      element: <EditEvent />
    },
    {
      path: routes.changePassword,
      element: <ChangePassword />
    },
    {
      path: routes.profile,
      element: <Profile />
    },
    {
      path: routes.listEvents,
      element: <ListEvent />
    },
    {
      path: routes.listStaffs,
      element: <ListStaff />
    }
  ]

  const routesForAuthenticatedOnly = [
    {
      path: routes.detailsEvent + '/:id',
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <DetailsEvent />
        }
      ]
    }
  ];

  const routesForNotAuthenticatedOnly = [
    {
      path: routes.home,
      element: <Home />
    },
    {
      path: routes.login,
      element: <Login />
    },
    {
      path: routes.register,
      element: <Signup />
    }
  ]

  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  return <RouterProvider router={router} />;
};

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
