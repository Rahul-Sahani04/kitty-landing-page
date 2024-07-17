import "./App.css";

// Add routes to the app here
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;
