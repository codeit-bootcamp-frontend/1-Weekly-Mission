interface SampleUser {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

interface User {
  data: UserData[];
}

interface UserData {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}
