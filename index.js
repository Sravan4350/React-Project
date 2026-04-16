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

// Lazy loading the Grocery component for better performance. It will only be loaded when the user navigates to the /grocery route.
//Dynamic import of Grocery component for code splitting and performance optimization. The component will only be loaded when it's needed, which can improve the initial load time of the application.

const Grocery = lazy(() => import("./src/components/Grocery"))

const AppLayout = () => {
  return (
    <div className="app-layout">
      <HeaderComponent />
      {/* // The Outlet component is used to render the matched child route components based on the current URL path. It acts as a placeholder for the child routes defined in the routing configuration. */}
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
          // Suspense component is used to wrap the lazy-loaded Grocery component. It provides a fallback UI (in this case, the Shimmer component) that will be displayed while the Grocery component is being loaded asynchronously.
          // When the user navigates to the /grocery route, the Grocery component will be loaded in the background. During this loading time, the Shimmer component will be displayed to indicate that content is being loaded. Once the Grocery component has finished loading, it will replace the Shimmer component in the UI.
          element : <Suspense fallback={<Shimmer />}><Grocery /></Suspense>,
          errorElement: <Error />
        },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);