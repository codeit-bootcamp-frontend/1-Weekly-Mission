import '@/styles/addLink.module.css';

function AddLink(): JSX.Element {
  return (
    <>
      <div className="container">
        <div className="input-container">
          <div className="add-box">
            <img src="/assets/image/linkIcon.svg" alt="링크 아이콘" />
            <input className="link-input" placeholder="링크를 추가해 보세요" />
            <button className="cta">추가하기</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddLink;
