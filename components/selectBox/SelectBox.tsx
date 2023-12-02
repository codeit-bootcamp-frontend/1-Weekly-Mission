import React from "react";
import * as S from "@/components/selectBox/SelectBox.style";

const SelectBox = ({ items, renderItem, ...props }) => {
  return (
    <S.SelectButtonWrap {...props}>
      {items && items.map((item) => <li key={item.id}>{renderItem(item)}</li>)}
    </S.SelectButtonWrap>
  );
};

export default SelectBox;
