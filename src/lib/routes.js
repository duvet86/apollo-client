const routes = [
  {
    id: 1,
    locationPath: "/",
    label: "Dashboard",
    componentName: "asyncDashBoard",
    isSideBar: true
  },
  {
    id: 2,
    locationPath: "/channellist",
    label: "Channel List",
    componentName: "asyncChannelsListContainer",
    isSideBar: true
  },
  {
    id: 3,
    locationPath: "/pageBuilder",
    label: "Page Builder",
    componentName: "asyncPageBuilderContainer",
    isSideBar: true
  },
  {
    id: 4,
    locationPath: "/settings",
    label: "Settings",
    componentName: "asyncSettings"
  },
  {
    id: 5,
    locationPath: "/help",
    label: "Help",
    componentName: "asyncHelp"
  }
];

const topBarRoutes = routes.filter(route => !route.isSideBar);
const sideBarRoutes = routes.filter(route => route.isSideBar);

export { topBarRoutes, sideBarRoutes };
export default routes;
