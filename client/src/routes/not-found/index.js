import React from "react";
import Loadable from "react-loadable";

import Loading from "../../components/loading";

const LoadableComponent = Loadable({
  loader: () => import("./not-found"),
  loading: Loading
});

const LoadableNotFound = () => <LoadableComponent />;

export default LoadableNotFound;
