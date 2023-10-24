import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/errorPage";
import Shop from "./components/shop";
import About from "./components/about";
import New from "./components/new";
import ProductPage from "./components/productPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/New",
      element: <New />
    },
    {
      path: "/About",
      element: <About />
    },
    {
      path: "/Shop",
      element: <Shop />,
    },
    {
      path: "/product-page/:name",
      element: <ProductPage />
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
