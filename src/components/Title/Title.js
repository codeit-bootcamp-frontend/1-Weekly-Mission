import FunctionButton from 'components/FunctionButton/FunctionButton';
import './Title.css';

function Title({ folderName, visibleButton }) {
  return (
    <div className="title-wrapper">
      <p className="title">{folderName}</p>
      {visibleButton && <FunctionButton folderName={folderName} />}
    </div>
  );
}

export default Title;
