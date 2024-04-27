import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import SignIn from "../pages/sign-in/SignIn";
const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        //   loader: rootLoader,
        children: [
            {
                path: "home",
                element: <DefaultLayout />,
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