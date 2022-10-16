import {
  createBrowserRouter,
} from "react-router-dom";
import Example from "../Example";
import Charator from "../pages/Charactor";
import Three from "../pages/Three";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/three",
    element: <Three />,
  },
  {
    path: "/charator",
    element: <Charator />,
  },
  {
    path: '/example',
    element: <Example />
  }
]);

export default router