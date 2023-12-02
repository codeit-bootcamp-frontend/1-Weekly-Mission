type Props = {
  folder: any;
  handleButton: (name: string, id: string) => void;
};

function FolderButton({ folder, handleButton }: Props): JSX.Element {
  const { id = '', name = '전체' } = folder;

  const handleButtonClick = (e: any): void => {
    handleButton(name, id);
  };

  return (
    <>
      <button className="button" onClick={handleButtonClick}>
        {name}
      </button>
    </>
  );
}

export default FolderButton;
