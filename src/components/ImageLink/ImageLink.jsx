export default function ImageLink({ site }) {
  const SITE_URL = 'https://www.' + site + '.com';
  const IMAGE = '/assets/icons/' + site + '.svg';
  return (
    <a href={SITE_URL}>
      <img src={IMAGE} alt={site} />
    </a>
  );
}
