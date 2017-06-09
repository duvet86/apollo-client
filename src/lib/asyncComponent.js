import Loadable from "react-loadable";
import Loading from "components/core/Loading";

export default function asyncComponent(importComponent) {
  return Loadable({
    loader: importComponent,
    LoadingComponent: Loading,
    delay: 200
  });
}
