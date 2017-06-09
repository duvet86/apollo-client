import asyncComponent from "lib/asyncComponent";

const routes = [
  {
    id: 1,
    path: "/",
    label: "Dashboard",
    component: asyncComponent(() => import("components/navigation/DashBoard")),
    isSideBar: true
  },
  {
    id: 2,
    path: "/channellist",
    label: "Channel List",
    component: asyncComponent(() =>
      import("components/channelList/ChannelsListContainer")
    ),
    isSideBar: true
  },
  {
    id: 3,
    path: "/pageBuilder",
    label: "Page Builder",
    component: asyncComponent(() =>
      import("components/pageBuilder/PageBuilderContainer")
    ),
    isSideBar: true
  },
  {
    id: 4,
    path: "/settings",
    label: "Settings",
    component: asyncComponent(() => import("components/navigation/Settings"))
  },
  {
    id: 5,
    path: "/help",
    label: "Help",
    component: asyncComponent(() => import("components/navigation/Help"))
  }
];

const topBarRoutes = routes.filter(route => !route.isSideBar);
const sideBarRoutes = routes.filter(route => route.isSideBar);

export { topBarRoutes, sideBarRoutes };
export default routes;
