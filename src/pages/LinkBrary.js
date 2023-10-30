import { useNavigate } from 'react-router-dom';

function LinkBrary() {
  const navigate = useNavigate();
  const handlePageMove = (e) => {
    return navigate(e.target.value);
  };
  return (
    <>
      <button onClick={handlePageMove} value={'/shared'}>
        공유 페이지
      </button>
      <button onClick={handlePageMove} value={'/folder'}>
        폴더 페이지
      </button>
    </>
  );
}

export default LinkBrary;
