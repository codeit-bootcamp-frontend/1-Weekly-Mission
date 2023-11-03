import SaveImg from '../../assets/images/save_your_link.png';
import ManageImg from '../../assets/images/manage_your_link.png';
import ShareImg from '../../assets/images/share_your_link.png';
import SearchImg from '../../assets/images/search_your_link.png';
import styles from './ServiceExplainer.module.css';
import TextGradiant from '../TextGradiant/TextGradiant';

class ExplainerSection {
  constructor(position, id, title, children, img) {
    this.position = position;
    this.id = id;
    this.title = title;
    this.children = children;
    this.img = img;
  }
}

const ExplainerSectionItems = [
  new ExplainerSection(
    'odd',
    'save_your_link',
    (
      <>
        <TextGradiant className={styles.saveTextGradiant}>
          원하는 링크
        </TextGradiant>
        를 저장하세요
      </>
    ),
    '나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고 싶은 모든 것을 한 공간에 저장하세요.',
    SaveImg
  ),
  new ExplainerSection(
    'even',
    'manage_your_link',
    (
      <>
        링크를 폴더로{' '}
        <TextGradiant className={styles.manageTextGradiant}>관리</TextGradiant>
        하세요
      </>
    ),
    '나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.',
    ManageImg
  ),
  new ExplainerSection(
    'odd',
    'share_your_link',
    (
      <>
        저장한 링크를{' '}
        <TextGradiant className={styles.shareTextGradiant}>공유</TextGradiant>해
        보세요
      </>
    ),
    '여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게 쉽고 빠르게 링크를 공유해 보세요.',
    ShareImg
  ),
  new ExplainerSection(
    'even',
    'search_your_link',
    (
      <>
        저장한 링크를{' '}
        <TextGradiant className={styles.searchtextGradiant}>검색</TextGradiant>
        해 보세요
      </>
    ),
    '중요한 정보들을 검색으로 쉽게 찾아보세요.',
    SearchImg
  ),
];

export default ExplainerSectionItems;
