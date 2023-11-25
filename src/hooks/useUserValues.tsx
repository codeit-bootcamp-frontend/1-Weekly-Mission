import { useCallback, useState } from "react";
import getUser from "../apis/user/getUser";

type Test = {
  id: number;
  created_at: string;
  name: string;
  email: string;
  imageSource: string;
  auth_id: string;
};

function UseUserValues() {
  const [values, setValues] = useState<Test>();

  const getUserData = useCallback(async () => {
    try {
      const dataset = await getUser();

      const {
        data: [{ id, created_at, name, email, image_source, auth_id }],
      } = dataset;

      setValues({
        id: id,
        created_at: created_at,
        name: name,
        email: email,
        imageSource: image_source,
        auth_id: auth_id,
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return [values, getUserData];
}

export default UseUserValues;
