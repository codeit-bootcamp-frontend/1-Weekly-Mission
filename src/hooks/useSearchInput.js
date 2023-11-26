import { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export default function useSearchInput(APIdata) {
  const location = useLocation();
  const [result, setResult] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();
  const initKeyword = searchParam.get("keyword");
  const [keyword, setKeyword] = useState(initKeyword ? initKeyword : "");
  const navigate = useNavigate();

  const filterData = (value) => {
    if (value) {
      const filteredData = APIdata.filter((item) => {
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

  const setInitData = () => {
    setResult(APIdata);
    if (keyword) {
      searchParam.set("keyword", keyword);
      setSearchParam(searchParam);
      filterData(keyword);
    }
  };

  return [
    location,
    result,
    searchParam,
    keyword,
    filterData,
    handleInputChange,
    handleFormSubmit,
    setInitData,
  ];
}
