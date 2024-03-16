import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/pages/AppLayout";
import Home from "./ui/pages/Home";
import Error from "./ui/pages/Error";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
