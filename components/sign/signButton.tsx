interface Props {
  text: string;
}

export default function Button({ text }: Props) {
  return (
    <button className='w-[25rem] py-4 px-5 btn-gra rounded-lg text-[1.125rem] leading-none border-solid'>
      {text}
    </button>
  );
}
