import styles from '@/styles/nav.module.css';
import UserProfile from './UserProfile';

function Nav({ userProfile }: { userProfile: any }): JSX.Element {
  return (
    <div className={styles.nav_wrapper}>
      <div className={styles.gnb}>
        <a href="index.html">
          <img className={styles.logo} src="@/public/images/linkbrary.svg" alt="홈으로 연결된 Linkbrary 로고" />
        </a>
        <UserProfile userProfile={userProfile} />
      </div>
    </div>
  );
}

export default Nav;
