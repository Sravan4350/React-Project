import ReactDOM from "react-dom/client";
import "./index.css";

import HeaderComponent from "./src/components/HeaderComponent";
import MainContent from "./src/components/MainContent";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
// import FooterComponent from "./FooterComponent";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <HeaderComponent />
      <Outlet />
      {/* <FooterComponent /> */}
    </div>
  )
}

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
        }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
