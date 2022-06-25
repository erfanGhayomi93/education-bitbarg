import AppView from "./app.view";
import type { AppProps } from "next/app";
import { useContext, useEffect } from "react";
import { MyContext } from "@/core/components/layout/context";
import { getLocalStorageUser } from "@/modules/auth/domain/usecases/useUser";
import { useRouter } from "next/router";

export default function AppComponent(props: AppProps) {
  const consumer: any = useContext(MyContext);
  const router = useRouter();

  useEffect(() => {
    if (router.query.application) {
      localStorage.setItem("application", "true");
    }

    if (getLocalStorageUser("application") || router.query.application) {
      consumer.setisShowHeader(false);
    }
  }, [router]);

  return (
    <>
      <AppView {...props} />
    </>
  );
}
