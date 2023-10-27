import { useState, useEffect, useCallback } from 'react';
import { getAccount } from "../global/api";

const useGetAccount = (init) => {
  const [account, setAccount] = useState(init);

  const getData = useCallback(async () => {
    const {email, profileImageSource} = await getAccount();
    if (!{email, profileImageSource}) return;
    setAccount({email, profileImageSource});
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return account;
}

export default useGetAccount;