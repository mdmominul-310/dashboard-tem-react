import { Dashboard, ShoppingBag } from "@mui/icons-material";

const sideBarItems = [
    {
        title: "Dashboard",
        route: "/home",
        icon: <Dashboard />,
        children: []
    },
    {
        title: "Products",
        route: "/home",
        icon: <ShoppingBag />,
        children: [
            {
                title: "Dashboard",
                route: "/home",
                icon: <Dashboard />,
            }
        ]
    },

]

export default sideBarItems;