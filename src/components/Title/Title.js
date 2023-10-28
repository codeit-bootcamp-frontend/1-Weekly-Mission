import FunctionButton from 'components/FunctionButton/FunctionButton';
import './Title.css';

function Title({ folderName }) {
  return (
    <div className="title-wrapper">
      <p className="title">{folderName}</p>
      <FunctionButton />
    </div>
  );
}

export default Title;
