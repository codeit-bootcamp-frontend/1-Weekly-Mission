const CardTextContent = ( { text, date} ) => {
  return (
    <>
      <p className='text'>{text}</p>
      <p className='date'>{date}</p>
    </>
  )
}

export default CardTextContent;