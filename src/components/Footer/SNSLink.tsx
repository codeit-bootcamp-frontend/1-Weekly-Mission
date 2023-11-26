interface Props {
  snsLink: {
    url: string;
    icon: string;
    alt: string;
  }
}

function SNSLink({ snsLink }: Props) {
  return (
    <>
      <a href={snsLink.url} target='_blank' rel='noopener noreferrer'>
        <img src={snsLink.icon} alt={`${snsLink.alt} 홈페이지로 연결된 ${snsLink.alt} 로고`} />
      </a>
    </>
  );
}

export default SNSLink;
