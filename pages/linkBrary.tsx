import { useRouter } from "next/navigation";
import React from "react";
import MainSection from "src/components/MainSection/MainSection";

function Linkbrary() {
  const navigate = useRouter();
  const handlePageMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    return navigate.push(e.currentTarget.value);
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
