import asyncComponent from "lib/asyncComponent";

const asyncDashBoard = asyncComponent(() =>
  import("components/navigation/DashBoard")
);
const asyncChannelsListContainer = asyncComponent(() =>
  import("components/channelList/ChannelsListContainer")
);
const asyncPageBuilderContainer = asyncComponent(() =>
  import("components/pageBuilder/PageBuilderContainer")
);
const asyncSettings = asyncComponent(() =>
  import("components/navigation/Settings")
);
const asyncHelp = asyncComponent(() => import("components/navigation/Help"));

export {
  asyncDashBoard,
  asyncChannelsListContainer,
  asyncPageBuilderContainer,
  asyncSettings,
  asyncHelp
};
