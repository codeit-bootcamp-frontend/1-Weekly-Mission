import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <HomeHead>
        . 　/)⋈/)
        <br />
        　(｡•ㅅ•｡)♡
        <br />
        ┏-∪-∪━━━━┓
        <br />♡ HomePage *.。♡ <br />
        ┗━━━━━━━┛
        <br />
      </HomeHead>
      <Link style={linkBox} href="/shared">
        shared
      </Link>
      <Link style={linkBox} href="/folder">
        folder
      </Link>
    </>
  );
}

const HomeHead = styled.h1`
  font-size: 3.2rem;
`;

const linkBox = {
  margin: '10px 10px',
  padding: '10px 10px',
  border: 'solid pink 4px',
  borderRadius: '20px',
  fontSize: '24px',
  textDecoration: 'none',
  color: 'black',
};
