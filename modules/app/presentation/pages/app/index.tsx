import AppView from "./app.view";
import type { AppProps } from "next/app";

export default function AppComponent(props: AppProps) {
  return (
    <>
      <AppView {...props} />
    </>
  );
}
