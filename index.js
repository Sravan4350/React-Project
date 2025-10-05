import ReactDOM from "react-dom/client";
import "./index.css";
import HeaderComponent from "./src/components/HeaderComponent";
import MainContent from "./src/components/MainContent";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Error from "./src/components/Error";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { lazy, Suspense } from "react";
import Shimmer from "./src/components/ShimmerUI";

// Outlet is a placeholder or container....component that renders the matched child route components in a parent route.
// React Router sends the corresponding child route component to the Outlet based on the current URL path.

const Grocery = lazy(() => import("./src/components/Grocery"))

const AppLayout = () => {
  return (
    <div className="app-layout">
      <HeaderComponent />
      <Outlet />
      {/* <FooterComponent /> */}
    </div>
  )
}

// Children routes are the routes which are nested inside a parent route.
// CreateBrowserRouter is used to set up the routing configuration for the application.
// RouterProvider is a component will provides the routing context to the entire application.

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children : [
        {
          path: "/",
          element: <MainContent />,
          errorElement: <Error />,
        },
        {
          path: "/about",
          element: <About />,
          errorElement: <Error />,
        },
        {
          path: "/contact",
          element: <Contact />,
          errorElement: <Error />,
        },
        {
          path : "/restaurant/:resId",
          element : <RestaurantMenu />,
          errorElement: <Error />
        },
        {
          path : "/grocery",
          element : <Suspense fallback={<Shimmer />}><Grocery /></Suspense>,
          errorElement: <Error />
        },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);