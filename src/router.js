import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/authentication/login";
import Signup from "./components/authentication/signup";
import Listcontainer from "./components/Listcontainer";
import Logout from "./components/authentication/logout";
import About from "./components/about";
import Addmed from "./components/curd/create";
import Viewmed from "./components/curd/view";
import Update from "./components/curd/update";
import Searchpage from "./components/curd/searchpage";

const router = createBrowserRouter([
    { path: 'app', element: <App /> },
    { path: '', element: <Login /> },
    { path: 'logout', element: <Logout /> },
    { path: 'signup', element: <Signup /> },
    { path: 'List', element: <Listcontainer /> },
    { path: 'about', element: <About /> },
    { path: 'addmed', element: <Addmed /> },
    { path: 'view/:id', element: <Viewmed /> },
    { path: 'update/:id', element: <Update /> },
    { path: 'search', element: <Searchpage /> },


]);

export default router;