import { useRouteError } from 'react-router-dom';
import React from 'react';
import './errorPage.css';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>잘못된 경로 입니다. 올바른 경로를 입력 해 주세요 🥰</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
