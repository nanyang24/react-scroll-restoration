import { useEffect, memo } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import { scrollTo, getScrollPage } from "./utils";

export const DefaultKey = "init-enter";

interface IProps {
  visitedUrl: Map<string, number>;
}

function ScrollRestoration({
  location,
  visitedUrl,
}: RouteComponentProps & IProps) {
  const handlePopStateChange = () => {
    const { state } = (location as unknown) as History;
    const key = state && state.key ? state.key : DefaultKey;
    const existingRecord = visitedUrl.get(key);

    if (existingRecord) {
      scrollTo(existingRecord);
    }
  };

  useEffect(() => {
    window.addEventListener("popstate", handlePopStateChange);
    return () => {
      window.removeEventListener("popstate", handlePopStateChange);
    };
  }, []);

  return null;
}

export default withRouter(
  memo(ScrollRestoration, (prevProps, nextProps) => {
    const { location: prevLoaction, visitedUrl } = prevProps;
    const { location: nextLoaction } = nextProps;

    const key = prevLoaction.key || DefaultKey;

    const locationChanged =
      (nextLoaction.pathname !== prevLoaction.pathname ||
        nextLoaction.search !== prevLoaction.search) &&
      nextLoaction.hash === "";

    const scroll = getScrollPage();

    if (locationChanged) {
      scrollTo(0);
      visitedUrl.set(key, scroll);
    }

    return false;
  })
);
