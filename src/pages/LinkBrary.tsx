import MainSection from "../components/MainSection/MainSection";
import { useNavigate } from "react-router-dom";
import React from "react";

function Linkbrary() {
  const navigate = useNavigate();
  const handlePageMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    return navigate(e.currentTarget.value);
  };
  return (
    <MainSection>
      <button onClick={handlePageMove} value={"/shared"}>
        공유 페이지
      </button>
      <button onClick={handlePageMove} value={"/folder"}>
        폴더 페이지
      </button>
    </MainSection>
  );
}

export default Linkbrary;
