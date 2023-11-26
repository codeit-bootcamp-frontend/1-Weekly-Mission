import styled from 'styled-components';

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
      <Button onClick={handleButtonClick}>{name}</Button>
    </>
  );
}

export default FolderButton;

const Button = styled.button`
  padding: 1rem;
  white-space: nowrap;
  border-radius: 10px;
  background-color: white;
  border: 1px solid var(--primary);

  &:hover {
    background-color: var(--primary, #f0f6ff);
    color: var(--white);
    transition: 0.5s;
  }
`;
