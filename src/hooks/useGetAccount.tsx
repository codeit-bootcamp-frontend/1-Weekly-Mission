import { useState, useEffect, useCallback } from "react";
import { getAccount } from "../global/api";

interface Props {
  email: string;
  image_source: string;
}

const useGetAccount = (userId: number) => {
  const [account, setAccount] = useState<Props | null>(null);

  const getData = useCallback(async () => {
    const userAccount = await getAccount(userId);
    if (!userAccount) return;
    else {
      const { email, image_source } = userAccount;
      setAccount({ email, image_source });
    }
  }, [userId]);

  useEffect(() => {
    getData();
  }, [userId]);

  return account;
};

export default useGetAccount;
