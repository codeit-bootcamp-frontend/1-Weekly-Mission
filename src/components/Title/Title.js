import './Title.css';

function Title({ folderName, children }) {
  return (
    <div className="title-wrapper">
      <p className="title">{folderName}</p>
      {children}
    </div>
  );
}

export default Title;
