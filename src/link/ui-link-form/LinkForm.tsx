import { Cta } from "@/src/sharing/ui-cta";
import styles from "./LinkForm.module.scss";
import classNames from "classnames/bind";
import {
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  MouseEventHandler,
  forwardRef,
} from "react";
import Image from "next/image";

const cx = classNames.bind(styles);

type LinkFormProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

export const LinkForm = forwardRef<HTMLFormElement, LinkFormProps>(
  ({ value, onChange, onSubmit }, ref) => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit(event);
    };
    LinkForm.displayName = "LinkForm";

    return (
      <form ref={ref} className={cx("form")} onSubmit={handleSubmit}>
        <div className={cx("input-box")}>
          <div className={cx("icon")}>
            <Image src="/images/link.svg" alt="링크 아이콘" fill />
          </div>
          <input
            className={cx("input")}
            type="text"
            placeholder="링크를 추가해 보세요"
            value={value}
            onChange={onChange}
          />
        </div>
        <button className={cx("button")} type="submit">
          <Cta>추가하기</Cta>
        </button>
      </form>
    );
  }
);
