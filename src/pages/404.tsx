import Link from 'next/link';
import Button from '@/components/Button';

function MissingPage() {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center gap-20pxr bg-background'>
      <div className='text-40pxr text-primary'>존재하지 않는 페이지입니다.</div>
      <Link href='/' className='w-[20rem]'>
        <Button>홈페이지로 돌아가기</Button>
      </Link>
    </div>
  );
}

export default MissingPage;
