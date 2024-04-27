import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";

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
]);


export default router;