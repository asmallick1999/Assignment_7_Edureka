import './App.css';
import RestaurantDetails from './Components/Details/RestaurantDetails';
import Home from './Components/Home/Home';
import ErrorPage from "../src/Components/Common/Errors";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/details",
    element: <RestaurantDetails/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
