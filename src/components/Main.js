import './Main.css';
import card1 from './img/card1.svg';
import card2 from './img/card2.svg';
import card3 from './img/card3.svg';
import search from './img/search.svg';

export default function Main() {
  return (
    <div className="main-container">
      <div className="main-search">
        <img src={search} />
        <div className="search-div">링크를 검색해 보세요.</div>
      </div>

      <div className="main-content-wrapper">
        <div className="card1-content">
          <div className="card1-img-div">
            <img className="cards" src={card1} />
          </div>
          <div className="card1-description">
            <div className="card1-time-div">10 minutes ago</div>
            <div className="card1-text-div">
              Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc
              consequat.
            </div>
            <div className="card1-year-div">2023. 3. 15</div>
          </div>
        </div>
        <div className="card2-content">
          <img className="cards" src={card2} />
          <div className="card2-description">
            <div>10 minutes ago</div>
            <div>
              Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc
              consequat.
            </div>
            <div>2023. 3. 15</div>
          </div>
        </div>
        <div className="card3-content">
          <img className="cards" src={card3} />
          <div className="card3-description">
            <div>10 minutes ago</div>
            <div>
              Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc
              consequat.
            </div>
            <div>2023. 3. 15</div>
          </div>
        </div>
      </div>
    </div>
  );
}
