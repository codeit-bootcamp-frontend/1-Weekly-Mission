import React from "react";
import Input from "@/components/Input";

import styles from "./signIn.module.css";

const signIn = () => {
  return (
    <div className={styles.wrap}>
      <Input type={"text"} />
      <Input type={"password"} />
    </div>
  );
};

export default signIn;
