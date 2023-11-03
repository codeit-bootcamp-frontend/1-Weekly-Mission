import { useCallback, useState } from 'react';
import getUser from '../apis/user/getUser';

function UseUserValues() {
  const [values, setValues] = useState({
    id: '',
    created_at: '',
    name: '',
    email: '',
    imageSource: '',
    auth_id: '',
  });

  const getUserData = useCallback(async () => {
    try {
      const data = await getUser();

      const {
        data: [{ id, created_at, name, email, image_source, auth_id }],
      } = data;

      setValues(() => ({
        id: id,
        created_at: created_at,
        name: name,
        email: email,
        imageSource: image_source,
        auth_id: auth_id,
      }));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return [values, getUserData];
}

export default UseUserValues;
