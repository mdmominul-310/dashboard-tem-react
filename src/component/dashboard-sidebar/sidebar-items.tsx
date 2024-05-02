import { Dashboard, ShoppingBag } from "@mui/icons-material";

const sideBarItems = [
    {
        title: "Dashboard",
        route: "/",
        icon: <Dashboard />,
        children: []
    },
    {
        title: "Products",
        route: "/",
        icon: <ShoppingBag />,
        children: [
            {
                title: "Dashboard",
                route: "/",
                icon: <Dashboard />,
            }
        ]
    },

]

export default sideBarItems;