import React from "react";
import styels from "./emptyPage.module.css";

export default function EmptyPage() {
  return (
    <div className={styels.emptyPageContainer}>
      <h1>저장된 링크가 없습니다</h1>
    </div>
  );
}
