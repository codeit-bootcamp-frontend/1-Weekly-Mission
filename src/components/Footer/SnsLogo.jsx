const SnsLogo = ({ brand }) => {
  return (
    <a
      href={`https://www.${brand[0]}.com/`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={brand[1]}
        alt={`${brand[0]} 홈페이지로 연결된 ${brand[0]} 로고`}
      />
    </a>
  );
};

export default SnsLogo;
