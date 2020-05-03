// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
// core components/views for Admin layout
import CategoryPage from "views/Category";

const dashboardRoutes = [
  {
    path: "/category",
    name: "Categoria",
    icon: Dashboard,
    component: CategoryPage,
    layout: "/admin"
  }
];

export default dashboardRoutes;
