interface Props {
  text: string;
}

export default function FolderButton({ text }: Props) {
  return (
    <button className='px-[0.625rem] py-[0.375rem] border-[1px] border-solid border-primary rounded-[0.3125rem] hover:bg-bg tb:px-[0.75rem] tb:py-[0.5rem]'>
      {text}
    </button>
  );
}
