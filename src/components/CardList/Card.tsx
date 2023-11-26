import "./CardStyles.css";
import { timeDifference } from "../../utils/timeUtils";
import Star from "../../assets/icons/Star";
import Kebab from "../../assets/icons/Kebab";

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
      className={`card ${isFolderPage ? "folder-page" : "share-page"}`}
      onClick={() => window.open(link.url, "_blank")}
    >
      {isFolderPage && (
        <button className="star-button">
          <Star />
        </button>
      )}
      <ImageSection link={link} imageSource={imageSource} />
      <div className="card-text">
        {isFolderPage ? (
          <FolderPageHeader timeDiffText={timeDiffText} />
        ) : (
          <span className="date">{timeDiffText}</span>
        )}
        <h3 className="title">{link.title}</h3>
        <p className="description">{link.description}</p>
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
    <div className="no-image">이미지가 없습니다.</div>
  );
};

interface DateProp {
  timeDiffText: string;
}

const FolderPageHeader = ({ timeDiffText }: DateProp) => (
  <div className="card-text-top">
    <span className="date">{timeDiffText}</span>
    <button className="kebab-button">
      <Kebab />
    </button>
  </div>
);

export default Card;
