export default function FolderButton({ text, folder_id }) {
  const handleClick = () => {
    console.log(folder_id);
  };

  return (
    <>
      <span onClick={handleClick} className='folderButton'>
        {text}
      </span>
    </>
  );
}
