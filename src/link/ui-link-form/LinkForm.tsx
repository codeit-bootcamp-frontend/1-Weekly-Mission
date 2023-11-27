import { Cta } from "sharing/ui-cta";
import styles from "./LinkForm.module.scss";
import classNames from "classnames/bind";
import { FormEvent } from "react";

interface LinkFormProps {
  onSubmit: (event: FormEvent) => void;
  isSticky: boolean;
  isHidden: boolean;
}

const cx = classNames.bind(styles);

export const LinkForm = ({ onSubmit, isSticky, isHidden }: LinkFormProps) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <div className={cx("container", { sticky: isSticky }, { hidden: isHidden })} aria-hidden={isHidden}>
      <form className={cx("form")} onSubmit={handleSubmit}>
        <div className={cx("input-box")}>
          <img className={cx("icon")} src="images/link.svg" alt="링크 아이콘" />
          <input className={cx("input")} type="text" placeholder="링크를 추가해 보세요" />
        </div>
        <button className={cx("button")} type="submit">
          <Cta>추가하기</Cta>
        </button>
      </form>
    </div>
  );
};
