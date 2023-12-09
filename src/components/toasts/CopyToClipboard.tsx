interface Props {
  show: boolean;
}

function CopyToClipboard({ show }: Props) {
  return (
    <>
      {show && (
        <div className='4 fixed -top-3/4 left-1/2 z-floating flex h-64pxr w-[32rem] -translate-x-1/2 animate-fadeOut items-center justify-center rounded-[0.8rem] bg-[rgba(0,0,0,0.8)] px-30pxr py-20pxr text-13pxr text-white'>
          링크가 복사되었습니다.
        </div>
      )}
    </>
  );
}

export default CopyToClipboard;
