import asyncComponent from "lib/asyncComponent";

const dashBoard = asyncComponent(() =>
  import("components/navigation/DashBoard")
);
const channelsList = asyncComponent(() =>
  import("components/channelList/ChannelsListContainer")
);
const pageBuilder = asyncComponent(() =>
  import("components/pageBuilder/PageBuilderContainer")
);
const help = asyncComponent(() => import("components/navigation/Help"));

export { dashBoard, channelsList, pageBuilder, help };
