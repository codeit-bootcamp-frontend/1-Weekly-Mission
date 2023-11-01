import { useState, useEffect, useCallback } from "react";
import { getAccount } from "../global/api";

const useGetAccount = (userID) => {
  const [account, setAccount] = useState(null);

  const getData = useCallback(async (userID) => {
    const { email, image_source } = await getAccount(userID);
    if (!email) return;
    else setAccount({ email, image_source });
  }, []);

  useEffect(() => {
    getData(userID);
  }, [getData, userID]);

  return account;
};

export default useGetAccount;
