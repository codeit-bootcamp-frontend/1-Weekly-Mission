import {
  useFetchSampleFolder,
  useFetchUserProfileSample,
} from "../../apis/fetch";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Share from "../../containers/Share/Share";
import styles from "./Shared.module.css";

const Shared = () => {
  const userProfile = useFetchUserProfileSample();
  const sampleFolder = useFetchSampleFolder();
  const userLoading = userProfile?.loading;
  const folderLoading = sampleFolder?.loading;

  let userData, folderData;
  if (!userLoading && !folderLoading) {
    userData = userProfile?.data;
    folderData = sampleFolder?.data;
  }

  console.log(2);
  if (userData && folderData) {
    return (
      <>
        <header className={styles.sharedHeader}>
          <Navbar userData={userData} />
        </header>
        <Share shareData={folderData} />
        <Footer />
      </>
    );
  }
};

export default Shared;
