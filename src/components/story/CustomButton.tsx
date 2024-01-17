// 스토리북 실습

import "./CustomButton.css";
import PropTypes from "prop-types";

interface CustomButtonProps {
  size: string;
  label: string;
  variant: string;
  backgroundColor: string;
  color: string;
}

export const CustomButton = ({
  size,
  label,
  variant,
  backgroundColor,
  color,
}: CustomButtonProps) => {
  const style = {
    backgroundColor,
    color,
  };
  return (
    <button
      className={["custom-button", `custom-button--${size}`, `custom-button--${variant}`].join(" ")}
      style={style}
    >
      {label}
    </button>
  );
};

CustomButton.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
};

// 기본 입력값으로, props에 값을 넣지 않았을때 기본값으로 들어가는 값
CustomButton.defaultProps = {
  backgroundColor: null,
  color: null,
  size: "md",
  variant: "outline",
};
