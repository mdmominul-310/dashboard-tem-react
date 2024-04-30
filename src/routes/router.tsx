import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import SignIn from "../pages/sign-in/SignIn";
import Home from "../pages/home/home";
const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        //   loader: rootLoader,
        children: [
            {
                path: "",
                element: <Home />,
                //   loader: teamLoader,
            },


        ],
    },
    {
        path: "/login",
        element: <SignIn />
    }
]);


export default router;