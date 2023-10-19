import Card from './Card';
import { Fragment } from 'react';

function CardList({ items }) {
  return (
    <>
      <div className='card-list'>
        {items.map((item) => {
          return (
            <Fragment key={item.id}>
              <Card item={item} />
            </Fragment>
          );
        })}
      </div>
    </>
  );
}

export default CardList;
