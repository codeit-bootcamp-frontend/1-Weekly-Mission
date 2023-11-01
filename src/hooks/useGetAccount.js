import { useState, useEffect, useCallback } from 'react';
import { getAccount } from '../global/api';

const useGetAccount = (userId) => {
  const [account, setAccount] = useState(null);

  const getData = useCallback(async () => {
    const userAccount = await getAccount(userId);
    console.log(userAccount); //undefined
    if (!userAccount) return;
    else {
      const { email, image_source } = userAccount;
      setAccount({ email, image_source });
    }
  }, [userId]);

  useEffect(() => {
    getData(userId);
  }, [getData, userId]);

  return account;
};

export default useGetAccount;
