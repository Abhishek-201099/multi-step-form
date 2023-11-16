import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import UserInfo from "./pages/UserInfo";
import Plans from "./pages/Plans";
import AddOns from "./pages/AddOns";
import Summary from "./pages/Summary";
import PageNotFound from "./pages/PageNotFound";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/userinfo" replace />,
      },
      {
        path: "/userinfo",
        element: <UserInfo />,
      },
      {
        path: "/plans",
        element: <Plans />,
      },
      {
        path: "/addons",
        element: <AddOns />,
      },
      {
        path: "/summary",
        element: <Summary />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
