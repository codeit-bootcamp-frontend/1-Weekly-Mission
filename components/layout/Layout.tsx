import styles from "./Layout.module.css";
import { RefObject, useEffect, useState } from "react";

import Header from "./header/Header";
import Footer from "./footer/Footer";

import { User } from "@/types/user";
import useFetch from "@/hooks/useFetch";
import { TEST_USER_ID } from "@/common/constants";
import { getUser } from "@/common/api";

interface Props {
  children: React.ReactNode;
  footerRef?: RefObject<HTMLDivElement>;
}

const DEFAULT_VALUE = {
  id: 1,
  name: "",
  email: "",
  image_source: "",
  created_at: "",
};

export default function Layout({ children, footerRef }: Props) {
  const [user, setUser] = useState<User>(DEFAULT_VALUE);
  const { isLoading, error, wrappedFunction: getUserAsyncFunc } = useFetch(getUser);

  const handleUserData = async () => {
    const result = await getUserAsyncFunc(TEST_USER_ID);
    if (!result) return;

    const { data } = result;
    setUser(data[0]);
  };

  useEffect(() => {
    handleUserData();
  }, []);

  if (error) console.log(error);

  return (
    <section className={styles.container}>
      <Header user={user} isLoading={isLoading} />
      <section className={styles.body}>{children}</section>
      <Footer ref={footerRef} />
    </section>
  );
}
