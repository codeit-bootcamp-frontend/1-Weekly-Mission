import React from 'react';
import { Link } from 'react-router-dom';

// 임시적으로 제작
function Home() {
  return (
    <>
      <div>
        <Link to="/">홈페이지</Link>
      </div>

      <div>
        <Link to="/shared">shared</Link>
      </div>
      <div>
        <Link to="/folder">folder</Link>
      </div>
    </>
  );
}

export default Home;
