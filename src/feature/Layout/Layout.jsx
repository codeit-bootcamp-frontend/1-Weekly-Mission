import { useGetUser } from "../../data-access/useGetUser";
import { Footer } from "../Footer";
import { NavigationBar } from "../NavigationBar";
import { DEFAULT_USER_ID } from "../../util/constant";
export const Layout = ({ children }) => {
  const { data } = useGetUser(DEFAULT_USER_ID);
  const { email, profileImageSource } = data || {};
  const profile = data ? { email, profileImageSource } : null;
  return (
    <div>
      <NavigationBar profile={profile} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
