import Button from '@/components/Button';

function Home() {
  return (
    <div className='flex flex-col gap-10pxr p-10pxr bg-background'>
      <Button>HELLO WORLD</Button>
      <Button>HELLO WORLD</Button>
      <div className='w-[10rem] text-[2rem] bg-clip-text text-transparent bg-gradient-to-r from-red to-[#6ADDFD]'>
        HELLO
      </div>
    </div>
  );
}

export default Home;
