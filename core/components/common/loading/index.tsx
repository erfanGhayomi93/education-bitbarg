import { useEffect, useState } from "react";
import LoadingView from "./loading.view";

type PropTypes = {};
export default function LoadingComponent(props: PropTypes) {
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    setInitialized(true);
  }, []);
  return <LoadingView {...props} {...{ initialized }} />;
}
