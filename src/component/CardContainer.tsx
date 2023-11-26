import { useEffect, useState } from "react";
import {
  Navigate,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import SearchBar from "./SearchBar";
import FolderList from "./FolderList";
import CardSection from "./CardSection";
import * as Styled from "../style/EmptyDiv";

export default function CardContainer({ folders, data, params }) {
  const APIdata = data;
  const location = useLocation();
  const [result, setResult] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();
  const initKeyword = searchParam.get("keyword");
  const [keyword, setKeyword] = useState(initKeyword ? initKeyword : "");
  const navigate = useNavigate();

  const message = data ? (
    "저장된 링크가 없습니다📭"
  ) : (
    <Navigate to="/NotFoundPage" />
  );

  const filterData = (value) => {
    if (value) {
      const filteredData = data.filter((item) => {
        return (item.description + item.title + item.url)
          .toLowerCase()
          .includes(value.toLowerCase());
      });
      setResult(filteredData);
    } else {
      setResult(APIdata);
    }
  };

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (keyword) {
      searchParam.set("keyword", keyword);
      setSearchParam(searchParam);
      filterData(keyword);
    } else {
      navigate(location.pathname);
      setResult(APIdata);
    }
  };

  //초기 데이터 설정
  useEffect(() => {
    setResult(APIdata);
    if (keyword) {
      searchParam.set("keyword", keyword);
      setSearchParam(searchParam);
      filterData(keyword);
    }
  }, [APIdata]);

  return (
    <section className="section">
      <SearchBar
        handleSubmit={handleFormSubmit}
        handleChange={handleInputChange}
        keyword={keyword}
      />
      {result && result.length !== 0 ? (
        <>
          <FolderList folders={folders} params={params} />
          <CardSection data={result} />
        </>
      ) : (
        <Styled.EmptyDiv> {message} </Styled.EmptyDiv>
      )}
    </section>
  );
}
