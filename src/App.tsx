import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
// import Home from "./ui/pages/Landing/Home";
import Error from "./ui/pages/Error/Error";
import Login from "./ui/pages/Authentication/Login/Login";
import Signup from "./ui/pages/Authentication/Signup/Signup";
import Dashboard from "./ui/pages/Dashboard/Dashboard";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
