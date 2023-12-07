import getCurrentUserData, { CurrentUserData } from "@/API/getCurrentUserData";
import { useCallback, useState } from "react";

function useUserValues(): [CurrentUserData | null, (accessToken: string) => Promise<void>] {
  const [values, setValues] = useState<CurrentUserData | null>(null);

  const getUserData = useCallback(async (accessToken: string) => {
    try {
      const result = await getCurrentUserData(accessToken);

      const {
        data: [{ id, created_at, name, email, image_source, auth_id }],
      } = result;

      setValues({
        id: id,
        created_at: created_at,
        name: name,
        email: email,
        image_source: image_source,
        auth_id: auth_id,
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return [values, getUserData];
}

export default useUserValues;
