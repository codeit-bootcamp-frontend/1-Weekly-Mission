import LinkAdd from '../components/LinkAdd';
import Search from '../components/Search';
// import CardList from '../components/CardList';
import styled from 'styled-components';

const Div = styled.div`
  max-width: 1060px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  margin: auto;
`;

export default function Folder() {
  return (
    <div className='folder'>
      <LinkAdd />
      <Search />
      <Div>저장된 링크가 없습니다</Div>
    </div>
  );
}
