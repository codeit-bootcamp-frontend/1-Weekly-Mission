import { timeDifference } from "../../utils/timeUtils";
import Star from "../../assets/icons/Star";
import Kebab from "../../assets/icons/Kebab";
import styles from "./CardStyles.module.css";
import Image from "next/image";

interface FolderPageLink {
  id: number;
  created_at: string | null;
  image_source: string | null;
  title: string | null;
  url: string;
  description: string | null;
  folder_id: number | null;
}

interface SharePageLink {
  id: number;
  createdAt: string | null;
  imageSource: string | null;
  title: string | null;
  url: string;
  description: string | null;
  folder_id: number | null;
}

type LinkProp = FolderPageLink | SharePageLink;

interface CardProps {
  link: LinkProp;
  isFolderPage: boolean;
}

const Card = ({ link, isFolderPage }: CardProps) => {
  if (!link) {
    return null;
  }

  const createdAt = isFolderPage
    ? (link as FolderPageLink).created_at
    : (link as SharePageLink).createdAt;
  const imageSource = isFolderPage
    ? (link as FolderPageLink).image_source
    : (link as SharePageLink).imageSource;

  const currentTime = new Date().getTime();
  const createdTime = createdAt ? new Date(createdAt).getTime() : currentTime;
  const timeDiffText = timeDifference(currentTime, createdTime);

  return (
    <div
      className={`${styles.card} ${
        isFolderPage ? styles.folderPage : styles.sharePage
      }`}
      onClick={() => window.open(link.url, "_blank")}
    >
      {isFolderPage && (
        <button className={styles.starButton}>
          <Star />
        </button>
      )}
      <ImageSection link={link} imageSource={imageSource} />
      <div className={styles.cardText}>
        {isFolderPage ? (
          <FolderPageHeader timeDiffText={timeDiffText} />
        ) : (
          <span className={styles.date}>{timeDiffText}</span>
        )}
        <h3 className={styles.title}>{link.title}</h3>
        <p className={styles.description}>{link.description}</p>
      </div>
    </div>
  );
};

interface ImageSectionProps {
  link: LinkProp;
  imageSource: string | null;
}

const ImageSection = ({ link, imageSource }: ImageSectionProps) => {
  return imageSource ? (
    <img src={imageSource} alt={link.title || "이미지"} />
  ) : (
    <div className={styles.noImage}>이미지가 없습니다.</div>
  );
};

interface DateProp {
  timeDiffText: string;
}

const FolderPageHeader = ({ timeDiffText }: DateProp) => (
  <div className={styles.cardTextTop}>
    <span className={styles.date}>{timeDiffText}</span>
    <button className={styles.kebabButton}>
      <Kebab />
    </button>
  </div>
);

export default Card;
