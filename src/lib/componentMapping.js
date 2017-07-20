import asyncComponent from "lib/asyncComponent";

const dashBoard = asyncComponent(() =>
  import("components/navigation/DashBoard")
);
const channelsList = asyncComponent(() =>
  import("components/channelList/ChannelListWithData")
);
const pageBuilder = asyncComponent(() =>
  import("components/pageBuilder/PageBuilderContainer")
);
const help = asyncComponent(() => import("components/navigation/Help"));
const applicationList = asyncComponent(() =>
  import("components/applicationList/ApplicationListWithData")
);

export { dashBoard, channelsList, pageBuilder, help, applicationList };
