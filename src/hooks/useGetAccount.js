import { useState, useEffect, useCallback } from "react";
import { getAccount } from "../global/api";

const useGetAccount = (userID) => {
  const [account, setAccount] = useState(null);
  const getData = useCallback(async (userID) => {
    const userAccount = await getAccount(userID);
    if (!userAccount) return;
    else {
      const { email, image_source } = await getAccount(userID);
      setAccount({ email, image_source });
    }
  }, []);

  useEffect(() => {
    getData(userID);
  }, [getData, userID]);

  return account;
};

export default useGetAccount;
