import { RefObject } from 'react';
import Link from 'next/link';
import {
  IconFacebook,
  IconInstagram,
  IconTwitter,
  IconYoutube,
} from '@/public/svgs';

interface Props {
  footerRef?: RefObject<HTMLDivElement>;
}

function Footer({ footerRef }: Props) {
  return (
    <footer ref={footerRef} className='w-full bg-julge-black'>
      <div className='grid justify-between grid-cols-[18rem_12rem] grid-rows-[1.8rem_1.8rem] gap-y-60pxr p-32pxr tablet:grid-cols-[repeat(3,_auto)]'>
        <section className='col-start-1 row-start-2 text-16pxr font-normal text-[#676767] tablet:col-start-1 tablet:row-start-1'>
          ©codeit - 2023
        </section>
        <section className='flex col-start-1 row-start-1 gap-30pxr tablet:col-start-2'>
          <Link
            href='/pages/privacy.html'
            className='text-16pxr font-normal text-[#cfcfcf]'
          >
            Privacy Policy
          </Link>
          <Link
            href='/pages/faq.html'
            className='text-16pxr font-normal text-[#cfcfcf]'
          >
            FAQ
          </Link>
        </section>
        <section className='flex justify-end col-start-2 row-start-1 gap-12pxr tablet:col-start-3'>
          <Link
            href='http://facebook.com'
            target='_blank'
            rel='noreferrer noopener'
          >
            <IconFacebook />
          </Link>
          <Link
            href='http://twitter.com'
            target='_blank'
            rel='noreferrer noopener'
          >
            <IconTwitter />
          </Link>
          <Link
            href='http://youtube.com'
            target='_blank'
            rel='noreferrer noopener'
          >
            <IconYoutube />
          </Link>
          <Link
            href='http://instagram.com'
            target='_blank'
            rel='noreferrer noopener'
          >
            <IconInstagram />
          </Link>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
