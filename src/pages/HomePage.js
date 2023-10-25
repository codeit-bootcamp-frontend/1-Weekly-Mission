import '../styles/homePage.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Linkbrary</title>
      </Helmet>
      <h1 className="page_title">여기는 hompage 입니다.</h1>
      <Link className="link" to="/shared">
        👻shared
      </Link>
      <Link className="link" to="/folder">
        😼folder
      </Link>
    </>
  );
}

export default HomePage;
