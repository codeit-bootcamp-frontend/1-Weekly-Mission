import kebab from './kebab.svg';

const CardExtraInfo = ( {children} ) => {

  return(
    <div className="card-extra-info">
      <p className="upload-time">{children}</p>
      <img src={kebab} class="kebab" alt="더보기 아이콘"></img>
    </div>
  )
}

export default CardExtraInfo;