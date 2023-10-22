import Search from './Search';
import Cards from './Cards';

const style = {
  width: '106rem',
  margin: '4rem auto',
};

function Section() {
  return (
    <section style={style}>
      <Search />
      <Cards />
    </section>
  );
}

export default Section;
