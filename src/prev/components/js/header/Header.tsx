import styled from "styled-components";
import Nav from "./Nav";
import styles from "./header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function FixedHeader() {
  return (
    <div className={cx("fixed_header")}>
      <Nav />
    </div>
  );
}

export function BasicHeader() {
  return (
    <div className={cx("basic_header")}>
      <Nav />
    </div>
  );
}

const StyledHeader = styled.div`
  width: 100%;
  height: 93px;
  background-color: var(--bg);
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    .Header_wrapper {
      padding: 10px 0 40px;
    }
  }
`;

export const FixedStyledHeader = styled(StyledHeader)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 4;
`;
