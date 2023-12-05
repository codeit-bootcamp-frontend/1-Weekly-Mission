import { useRouter } from 'next/navigation';
import { MouseEvent } from 'react';

interface Props {
  text: string;
  id?: number | '';
  isSelected: boolean;
}

export default function FolderButton({ text, isSelected, id = '' }: Props) {
  const Color = isSelected ? 'bg-primary text-white' : 'bg-white hover:bg-bg';
  const router = useRouter();

  const handleClick = () => {
    router.push(`/folder?folderId=${id}`);
  };
  return (
    <button
      className={`${Color} px-[0.625rem] py-[0.375rem] border-[1px] border-solid border-primary rounded-[0.3125rem]  tb:px-[0.75rem] tb:py-[0.5rem] h-[2.3125rem] shrink-0`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
