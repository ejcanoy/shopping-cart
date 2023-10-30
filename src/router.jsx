import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/errorPage";
import Shop from "./components/shop";
import About from "./components/about";
import New from "./components/new";
import ProductPage from "./components/productPage";
import OurStory from "./components/ourStory";
import Contact from "./components/contact";
import Home from "./components/home";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/New",
      element: <New />
    },
    {
      path: "/About",
      element: <About />,
      children: [
        {path: "OurStory", element: <OurStory />},
        {path: "Contact", element: <Contact />}
      ]
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
