import styled from "styled-components";
import { ReactComponent as searchIcon } from "../../Assets/Search.svg";
import { ReactComponent as removeIcon } from "../../Assets/close_white.svg";

interface Props {
  value: string;
  onChange: (value: string) => void;
  onDelete: () => void;
}

function Search({ value, onChange, onDelete }: Props) {
  console.log(value);
  console.log(onChange);
  console.log(onDelete);
  const handleChangeValue = (e: any) => {
    const nextValue = e.target.value;
    onChange(nextValue);
  };

  const handleClickRemoveBtn = () => {
    onDelete();
  };

  return (
    <>
      <SearchForm>
        <SearchIcon src={searchIcon} alt={searchIcon} />
        <SearchInput
          placeholder="링크를 검색해보세요"
          value={value}
          onChange={handleChangeValue}
          type="text"
        ></SearchInput>
        {value && <CloseIcon onClick={handleClickRemoveBtn} />}
      </SearchForm>
    </>
  );
}

export default Search;

const SearchForm = styled.form`
  width: 1060px;
  height: 54px;
  margin: 40px auto;
  position: relative;
  display: flex;
  justify-content: justify-content;
  align-items: center;
  padding: 15px 16px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 10px;

  @media (max-width: 1199px) and (min-width: 768px) {
    width: 704px;
  }

  @media (max-width: 767px) {
    width: 325px;
  }
`;

const SearchIcon = styled(searchIcon)`
  width: 16px;
  height: 16px;
  margin-right: 10px;

  & path {
    stroke: ${({ value }) => (value?.length >= 1 ? "#6D6AFE" : "#666666")};
  }
`;

interface InputItem {
  style?: any;
}

const SearchInput = styled.input<InputItem>`
  width: 100%;
  overflow: hidden;
  font-size: 16px;
  color: #666;
  background: none;
  border: none;
  ime-mode: active;

  &:hover {
    outline: none;
  }

  &:focus {
    outline: none;
  }
`;

const CloseIcon = styled(removeIcon)`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  cursor: pointer;
`;
